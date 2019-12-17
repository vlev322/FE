"use strict";

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isAN = value => {
	if (value instanceof Number) value = value.valueOf();
	return isFinite(value) && value === parseInt(value, 10);
};

const counter = () => {
	let times = 0;
	return () => {
		return times++;
	};
};

const drafterSecretNum = secretNumber => {
	let root = document.getElementsByTagName("main")[0],
		h3 = document.createElement("h3"),
		secretNumShow = document.createTextNode(`Secret number is ${secretNumber}.`);
	h3.appendChild(secretNumShow);
	root.appendChild(h3);
};

const drafterTries = (min, max, answer, attempt) => {
	let root = document.getElementsByTagName("main")[0],
		p = document.createElement("p"),
		attemptText = document.createTextNode(`Attempt #${attempt} | answer ${answer} | min ${min}, max ${max}.`);
	p.appendChild(attemptText);
	root.appendChild(p);
};

function guesster() {
	const counterTries = counter();
	let min = 0,
		max = 100,
		attempt = 0,
		guessNumber = 0;
	const secretNum = random(min, max);
	drafterSecretNum(secretNum);
	do {
		guessNumber = random(min, max);
		if (isAN(guessNumber)) {
			if (guessNumber > secretNum && guessNumber < max) max = guessNumber;
			if (guessNumber < secretNum && guessNumber > min) min = guessNumber;
		}
		attempt = counterTries();
		drafterTries(min, max, guessNumber, attempt);
	} while (guessNumber !== secretNum);
	return tries();
}
guesster();
