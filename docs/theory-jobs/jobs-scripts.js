(async function () {
	// The CSV file to load is set via data-csv="path/to/file.csv" on the <script> tag in your HTML.
	const csvSrc = document.currentScript.getAttribute("data-csv");

	// Fetches and parses the CSV. PapaParse turns each row into an object keyed by header name.
	// Empty cells become null instead of "" so checks like `j.hire` work cleanly.
	async function loadJobs(url) {
		const resp = await fetch(url);
		const text = await resp.text();
		const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
		return data.map((row) =>
			Object.fromEntries(
				Object.entries(row).map(([k, v]) => [k, v !== "" ? v : null]),
			),
		);
	}

	const jobs = await loadJobs(csvSrc);

	// ── constants & helpers ───────────────────────────────────────────────────────
	// These split the full job list by the "type" column in your CSV (values: "TT" or "NTT").
	// "hires" = rows where the "hire" column is non-empty.

	const ttJobs = jobs.filter((j) => j.type === "TT");
	const nttJobs = jobs.filter((j) => j.type === "NTT");
	const ttHires = ttJobs.filter((j) => j.hire);
	const nttHires = nttJobs.filter((j) => j.hire);
	const allHires = [...ttHires, ...nttHires];

	// Counts occurrences of whatever fn(row) returns. Rows where fn returns falsy are skipped.
	function countBy(arr, fn) {
		return arr.reduce((acc, j) => {
			const k = fn(j);
			if (k) acc[k] = (acc[k] || 0) + 1;
			return acc;
		}, {});
	}

	// Maps a list of labels to their counts, filling in 0 for any label with no matches.
	function align(labels, counts) {
		return labels.map((l) => counts[l] || 0);
	}

	// Returns the keys of an object sorted by value descending, optionally capped at n items.
	// Used to build the axis labels for charts from the most-common values in the data.
	function sortedKeys(obj, n = Infinity) {
		return Object.entries(obj)
			.sort((a, b) => b[1] - a[1])
			.slice(0, n)
			.map((e) => e[0]);
	}

	// Returns the current color palette depending on light/dark mode.
	// Edit tt/ntt values here to change bar colors.
	function chartColors() {
		const dark =
			document.documentElement.getAttribute("data-bs-theme") === "dark";
		return {
			text: dark ? "#f5eedf" : "#553819",
			tick: dark ? "#7f6e59" : "#553819",
			grid: dark ? "rgba(245,238,223,0.1)" : "rgba(85,56,25,0.1)",
			tt: "rgba(0, 204, 187, 0.5)",
			ntt: "rgba(238, 175, 141, 0.5)",
		};
	}

	// Builds the shared Chart.js options object for bar charts.
	// indexAxis: 'y' = horizontal bars, 'x' = vertical bars.
	function barOpts(indexAxis) {
		const { tick, grid } = chartColors();
		return {
			plugins: {
				legend: {
					position: "bottom",
					labels: { font: { size: 11 }, boxWidth: 14 },
				},
			},
			scales:
				indexAxis === "y"
					? {
							x: {
								beginAtZero: true,
								stacked: true,
								ticks: { stepSize: 1, color: tick },
								grid: { color: grid },
							},
							y: {
								stacked: true,
								grid: { display: false },
								ticks: { font: { size: 12 }, color: tick },
							},
						}
					: {
							y: {
								beginAtZero: true,
								stacked: true,
								ticks: { stepSize: 1, color: tick },
								grid: { color: grid },
							},
							x: {
								stacked: true,
								grid: { display: false },
								ticks: { color: tick },
							},
						},
		};
	}

	// ── data builders ─────────────────────────────────────────────────────────────

	const ABD_LABELS = ["Degree in hand", "ABD"];

	// These labels are built dynamically from the data — the most common values win.
	// DEG_LABELS: all unique values in the "degree" column, sorted by frequency.
	// FEEDER_LABELS: top 12 "from" values (skipping "Not listed").
	// SPEC_LABELS: all unique values in the "spec" column, sorted by frequency.
	const DEG_LABELS = sortedKeys(countBy(allHires, (j) => j.degree));
	const FEEDER_LABELS = sortedKeys(
		countBy(allHires, (j) => (j.from !== "Not listed" ? j.from : null)),
		12,
	);
	const SPEC_LABELS = sortedKeys(countBy(allHires, (j) => j.spec));

	// Builds Chart.js dataset arrays for a chart, always showing TT and NTT as stacked datasets.
	// labelList: the axis labels (e.g. DEG_LABELS).
	// keyFn: function that extracts the category value from a row.
	// isHires: true = use hire rows only, false = use all job rows.
	function datasets(labelList, keyFn, isHires = true) {
		const { tt, ntt } = chartColors();
		const ttC = countBy(isHires ? ttHires : ttJobs, keyFn);
		const nttC = countBy(isHires ? nttHires : nttJobs, keyFn);
		return [
			{
				label: "TT",
				data: align(labelList, ttC),
				backgroundColor: tt,
				borderRadius: 4,
			},
			{
				label: "NTT",
				data: align(labelList, nttC),
				backgroundColor: ntt,
				borderRadius: 4,
			},
		];
	}

	// Dataset builder for the ABD chart.
	// Counts hires where "year" column === "ABD" vs any other non-empty value.
	function abdDatasets() {
		const { tt, ntt } = chartColors();
		function counts(h) {
			return [
				h.filter((j) => j.year && j.year !== "ABD").length,
				h.filter((j) => j.year === "ABD").length,
			];
		}
		return [
			{
				label: "TT",
				data: counts(ttHires),
				backgroundColor: tt,
				borderRadius: 4,
			},
			{
				label: "NTT",
				data: counts(nttHires),
				backgroundColor: ntt,
				borderRadius: 4,
			},
		];
	}

	// Builds the Chart.js tooltip plugin config for a given chart definition.
	// Each chart def supplies a getTooltipJobs(label, type) function (see CHART_DEFS below)
	// that returns the matching hire rows for a hovered bar segment.
	//
	// To change what text appears per row: edit the template literal in .map() below.
	//   Available columns from the CSV: j.institution, j.hire, j.from, j.degree, j.spec, j.year
	//   Example — show "Institution (degree-granting school)":
	//     .map((j) => `  ${j.institution} (${j.from})`)
	//
	// To change the cap on listed entries: change the .slice(0, 8) limit.
	// To remove the "… and N more" overflow line: delete the if-block after .map().
	function makeTooltipCallback(def) {
		return {
			callbacks: {
				afterLabel(ctx) {
					const label = ctx.chart.data.labels[ctx.dataIndex];
					const dsLabel = ctx.dataset.label;
					const matching = def.getTooltipJobs(label, dsLabel);
					if (!matching.length) return [];
					const lines = matching.slice(0, 8).map((j) => `• ${j.institution}`);
					if (matching.length > 8)
						lines.push(`  … and ${matching.length - 8} more`);
					return lines;
				},
			},
		};
	}

	// ── chart registry ────────────────────────────────────────────────────────────
	// To add a chart:    add a <canvas id="..."> to your HTML, then add one entry here.
	// To remove a chart: delete the entry here, and delete the <canvas> from your HTML.
	//
	// Each entry needs:
	//   id              — must match the id="..." on the <canvas> element in HTML
	//   labels          — array of category labels shown on the axis
	//   getDatasets     — function returning Chart.js dataset arrays
	//   getTooltipJobs  — function(label, type) returning the hire rows for a hovered bar.
	//                     label is the axis category (e.g. "PhD"), type is "TT" or "NTT".
	//                     Filter the appropriate hires array and return matching rows.
	//                     What each row displays is controlled by makeTooltipCallback above.
	//   options         — Chart.js options object (use barOpts('x') or barOpts('y'))

	const CHART_DEFS = [
		{
			id: "degreeTypeChart",
			title: "Hiree degree type",
			labels: DEG_LABELS,
			getDatasets: () => datasets(DEG_LABELS, (j) => j.degree),
			getTooltipJobs: (label, type) =>
				(type === "TT" ? ttHires : nttHires).filter((j) => j.degree === label),
			options: barOpts("x"),
		},
		{
			id: "abdChart",
			title: "ABD vs. Degree in Hand at Hire",
			labels: ABD_LABELS,
			getDatasets: abdDatasets,
			getTooltipJobs: (label, type) => {
				const hires = type === "TT" ? ttHires : nttHires;
				return label === "ABD"
					? hires.filter((j) => j.year === "ABD")
					: hires.filter((j) => j.year && j.year !== "ABD");
			},
			options: barOpts("x"),
		},
		{
			id: "feederChart",
			title: "Hiree Degree-Granting Institution",
			wide: true,
			labels: FEEDER_LABELS,
			getDatasets: () =>
				datasets(FEEDER_LABELS, (j) =>
					j.from !== "Not listed" ? j.from : null,
				),
			getTooltipJobs: (label, type) =>
				(type === "TT" ? ttHires : nttHires).filter((j) => j.from === label),
			options: { indexAxis: "y", ...barOpts("y") },
		},
		{
			id: "specializationChart",
			title: "Hiree Degree Concentration",
			wide: true,
			labels: SPEC_LABELS,
			getDatasets: () => datasets(SPEC_LABELS, (j) => j.spec),
			getTooltipJobs: (label, type) =>
				(type === "TT" ? ttHires : nttHires).filter((j) => j.spec === label),
			options: { indexAxis: "y", ...barOpts("y") },
		},
	];

	document.getElementById("charts-grid").insertAdjacentHTML(
		"afterbegin",
		CHART_DEFS.map(
			(def) => `
		<div class="card chart-card${def.wide ? " wide" : ""}">
			<div class="card-body">
				<p class="fs-6">${def.title}</p>
				<div class="chart-wrap"><canvas aria-label="${def.title}" role="img" id="${def.id}"></canvas></div>
			</div>
		</div>`,
		).join(""),
	);

	Chart.defaults.color = chartColors().text;

	const charts = CHART_DEFS.map((def) => {
		const opts = {
			...def.options,
			plugins: {
				...def.options.plugins,
				tooltip: makeTooltipCallback(def),
			},
		};
		return {
			def,
			instance: new Chart(document.getElementById(def.id), {
				type: "bar",
				data: { labels: def.labels, datasets: def.getDatasets() },
				options: opts,
			}),
		};
	});

	// ── stats & table ─────────────────────────────────────────────────────────────

	// Renders the summary stat cards above the charts.
	// To add/remove/rename a stat card, edit the `rows` arrays below.
	// Each entry needs a `num` (the count) and a `label` (the display text).
	function updateStats() {
		const isCancelledFailed = (j) =>
			j.status === "Search cancelled" || j.status === "Search failed";
		const isNoInfo = (j) => j.status === "No hire listed";
		const ttNoInfo = ttJobs.filter(isNoInfo).length;
		const nttNoInfo = nttJobs.filter(isNoInfo).length;
		document.getElementById("intro").innerHTML = `
    <p>
        In this job market cycle, <span class="fw-bold text-primary">${ttJobs.length} tenure-track (TT) and ${nttJobs.length} non-tenure-track (NTT)</span> jobs were listed. Of these, <span class="fw-bold text-success">${ttHires.length} TT and ${nttHires.length} NTT</span> were filled. <span class="fw-bold text-danger">${ttJobs.filter(isCancelledFailed).length} TT and ${nttJobs.filter(isCancelledFailed).length} NTT</span> were canceled or failed. <span class="fw-bold text-warning">${ttNoInfo + nttNoInfo} jobs</span> (${ttNoInfo} TT, ${nttNoInfo} NTT) have no hire information posted.</p><p>In an effort to better understand hiring trends, the following charts reflect only the <span class="fw-bold text-primary">${allHires.length} jobs</span> whose positions were filled successfully.
    </p>`;
	}

	// Returns a Bootstrap badge for the job status value.
	// Add new status strings here if your CSV gains new status values.
	function statusBadge(s) {
		const cls =
			s === "Filled"
				? "text-bg-success"
				: s === "No hire listed"
					? "text-bg-warning"
					: s === "Search cancelled" || "Search failed"
						? "text-bg-danger"
						: "text-bg-secondary";
		return `<span class="badge ${cls}">${s}</span>`;
	}

	// Renders the main data table.
	// CSV column names referenced: institution, location, title, type, status, hire, from, degree, spec, year.
	function updateTable() {
		document.querySelector("#mainTable tbody").innerHTML = jobs
			.map(
				(j) => `<tr>
				<td scope="row">${j.institution}</td>
				<td style="white-space:nowrap;">${j.location}</td>
				<td style="max-width:300px;">${j.title}</td>
				<td><span class="badge" style="background-color:${j.type === "TT" ? "rgba(0, 204, 187, 0.5)" : "rgba(238, 175, 141, 0.5)"}; color: inherit;">${j.type}</span></td>
				<td>${statusBadge(j.status)}</td>
				<td style="white-space:nowrap;">${j.hire || "—"}</td>
				<td>${j.from || "—"}</td>
				<td>${j.degree || "—"}</td>
				<td>${j.spec || "—"}</td>
				<td>${j.year || "—"}</td>
			</tr>`,
			)
			.join("");
	}

	updateStats();
	updateTable();

	// ── dark-mode chart refresh ───────────────────────────────────────────────────
	// Watches for Bootstrap's data-bs-theme attribute changing on <html> and re-applies
	// colors to all charts so they match the new theme without a page reload.

	function applyChartTheme() {
		const { text, tick, grid, tt, ntt } = chartColors();
		Chart.defaults.color = text;
		charts.forEach(({ instance }) => {
			if (instance.options.scales) {
				Object.values(instance.options.scales).forEach((scale) => {
					if (scale.grid) scale.grid.color = grid;
					if (scale.ticks) scale.ticks.color = tick;
				});
			}
			instance.data.datasets.forEach((ds) => {
				if (ds.label === "TT" || ds.label === "NTT")
					ds.backgroundColor = ds.label === "TT" ? tt : ntt;
			});
			instance.update("none");
		});
	}

	new MutationObserver(applyChartTheme).observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-bs-theme"],
	});
})();
