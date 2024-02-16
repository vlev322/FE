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

function guesster() {
	const tries = counter();
	let min = 0,
		max = 100,
		guessNumber = 0;
	alert(`Відгадай число в діапазоні ${min} - ${max}`);
	const secretNum = random(min, max);
	do {
		guessNumber = +prompt(`Спробуй ще раз в діапазоні ${min} - ${max} :)`);
		if (isAN(guessNumber)) {
			if (guessNumber > secretNum && guessNumber < max) max = guessNumber;
			if (guessNumber < secretNum && guessNumber > min) min = guessNumber;
		}
		tries();
	} while (guessNumber !== secretNum);
	return alert(`Right!\nYou used ${tries()} times.`);
}
guesster();
