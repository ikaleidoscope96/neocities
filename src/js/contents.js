const content = document.querySelector("main");
const headings = content.querySelectorAll("h2, h3, h4, h5, h6");
const entries = document.querySelector("ul.table-of-contents");

headings.forEach(function (heading) {
	const id = heading.innerText.toLowerCase().replace(/\s+/g, "-");
	heading.id = id;

	const entry = document.createElement("li");
	const link = document.createElement("a");
	link.innerText = heading.innerText;
	link.href = `#${id}`;

	entry.append(link);
	entries.append(entry);
});
