"use strict";

function* fibonacci() {
	let seq = [0, 1];
	while (true) {
		const qnt = yield seq;
		for (let i = qnt; i > 0; i--) {
			const sum = seq[seq.length - 1] + seq[seq.length - 2];
			seq.push(sum);
		}
		seq = seq.slice(seq.length - qnt);
	}
}

const n1 = fibonacci();

console.log(...n1.next().value);  // 0 1
console.log(...n1.next(7).value); // 1 2 3 5 8 13 21
console.log(...n1.next(7).value); // 34 55 89 144 233 377 610
console.log(...n1.next(3).value); // 987 1597 2584
console.log(...n1.next(8).value); // 4181 6765 10946 17711 28657 46368 75025 121393
