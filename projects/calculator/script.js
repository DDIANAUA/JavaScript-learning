"use strict";

const num_1 = document.getElementById('calculator__input-1');
const num_2 = document.getElementById('calculator__input-2');
const resBTN = document.getElementById('calculator-result-btn');
const resNUM = document.getElementById('calculator__result-number');
const plusBTN = document.getElementById('plusBTN');
const minusBTN = document.getElementById('minusBTN');
let operation = '+';


plusBTN.onclick  = function () {
	operation = '+';
	plusBTN.style.backgroundColor = '#006000';
	minusBTN.style.backgroundColor = 'red';
}

minusBTN.onclick  = function () {
	operation = '-';
	plusBTN.style.backgroundColor = 'green';
	minusBTN.style.backgroundColor = '#c30000';
}

resBTN.onclick = function () {
	if(operation == '+'){
		const summa = Number(num_1.value) + Number(num_2.value);
		resNUM.textContent = summa;
	} else {
		const summa = Number(num_1.value) - Number(num_2.value);
		resNUM.textContent = summa;
	}

}