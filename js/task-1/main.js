"use strict";

function* fibonacci() {
	let seq = [0, 1];
	while (true) {
		const qnt = yield seq;
		for (let i = qnt; i > 0; i--) {
			const sum = seq[seq.length - 1] + seq[seq.length - 2];
			seq.push(sum);
		}
		seq = qnt < 2 ? seq.slice(seq.length - 2) : seq.slice(seq.length - qnt);
	}
}

const isAN = (value) => {
	if (value instanceof Number)
		value = value.valueOf();

	return isFinite(value) && value === parseInt(value, 10);
}

const seqFib = fibonacci();

seqFib.next().value;

const root = document.getElementsByTagName("main")[0],
	input = document.createElement("input"),
	btn = document.createElement("button"),
	wrapper = document.createElement("div"),
	h2 = document.createElement("h2"),
	err = document.createElement("h3"),
	textBtn = document.createTextNode("OK"),
	textErr = document.createTextNode("Please enter number more than 0 and number must be INTEGER!"),
	textTitle = document.createTextNode("Enter number more than 0 and push `OK`");

input.setAttribute("placeholder", "Enter integer");
btn.appendChild(textBtn);
h2.appendChild(textTitle);
err.appendChild(textErr);

wrapper.innerHTML += h2.outerHTML + input.outerHTML;
root.appendChild(wrapper);
root.appendChild(btn);

const drawFib = () => {
	const number = +document.getElementsByTagName("input")[0].value;
	if (!isAN(number)) {
		root.appendChild(err);
	} else {
		const collectionErr = document.getElementsByTagName("h3");
		if (collectionErr.length !== 0) root.removeChild(err);
		let sequence = seqFib.next(number).value,
			p = document.createElement("p");
		p.innerHTML = sequence;
		root.appendChild(p)
	}
}

btn.addEventListener("click", drawFib);