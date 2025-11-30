// ----- last modified date -----

if (document.getElementById("last-modified") != null) {
	// don't run if not needed
	let modDate = new Date(document.lastModified); // store last-mod date
	document.getElementById("last-modified").innerHTML += modDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }); // format last-mod date to look nicer
}
