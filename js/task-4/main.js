function templateTag(tag, text = "", link = "") {
	const root = document.querySelector("body"),
		element = document.createElement(tag),
		elementText = document.createTextNode(text);
	if (tag === "a") element.setAttribute("href", link);
	element.appendChild(elementText);
	return root.appendChild(element);
}

const templateList = (type, data) => {
	const listWrapper = templateTag(type);
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		const theme = templateTag('a', );
	}
};

templateTag("h1", "Hello world!");
templateTag("h2", "We are happy to see you here!");
templateTag("p", "Text just for testing p tag.");
