// ----- color mode toggle -----

(function () {
	const html = document.documentElement;
	const stored = localStorage.getItem("color-mode");
	if (stored) html.setAttribute("data-bs-theme", stored);

	function updateIcon(theme) {
		const icon = document.getElementById("color-mode-icon");
		if (icon) icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
	}

	document.addEventListener("DOMContentLoaded", function () {
		updateIcon(html.getAttribute("data-bs-theme") || "light");
		const btn = document.getElementById("color-mode-toggle");
		if (!btn) return;
		btn.addEventListener("click", function () {
			const next = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
			html.setAttribute("data-bs-theme", next);
			localStorage.setItem("color-mode", next);
			updateIcon(next);
		});
	});
})();

// ----- last modified date -----

if (document.getElementById("last-modified") != null) {
	// don't run if not needed
	let modDate = new Date(document.lastModified); // store last-mod date
	document.getElementById("last-modified").innerHTML += modDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); // format last-mod date to look nicer
}

// add bootstrap classes to tables automatically

function addTableClasses() {
	const allTables = document.querySelectorAll("table");
	allTables.forEach((table) => {
		table.classList.add("table");
	});
}

document.addEventListener("DOMContentLoaded", addTableClasses);

//  open external links in new tab via https://www.w3tutorials.net/blog/open-external-links-in-a-new-tab-without-jquery/

function setupExternalLinks() {
	const allLinks = document.querySelectorAll("a");

	allLinks.forEach((link) => {
		const href = link.getAttribute("href");
		if (!href || !href.startsWith("http")) return;

		try {
			const linkHostname = new URL(href).hostname;
			const currentHostname = window.location.hostname;

			if (linkHostname !== currentHostname) {
				link.target = "_blank";
				link.rel = "noopener noreferrer";
			}
		} catch (error) {
			// Skip invalid URLs (e.g., malformed href)
			console.warn("Invalid URL:", href);
		}
	});
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupExternalLinks);
