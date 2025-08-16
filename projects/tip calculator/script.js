"use strict";

const inputOrderAmount = document.getElementById("input-order-amount");
const inputTipPercentage = document.getElementById("input-tip-percentage");
const inputBtn = document.getElementById("input-btn");
const resultTipAmount = document.getElementById("result-tip-amount");
const resultSumma = document.getElementById("result-summa");

function parseValue(input) {
	const value = Number(input.value);
	return isNaN(value) || value < 0 ? 0 : value;
}

function calculateTip(order, tip) {
	const tipAmount = order * (tip / 100);
	return tipAmount;
}

function calculateSumma(orderA, tipA) {
	return orderA + tipA;
}

function updateResult() {
	const orderAmountValue = parseValue(inputOrderAmount);
	const tipPercentageValue = parseValue(inputTipPercentage);

	const tip = calculateTip(orderAmountValue, tipPercentageValue);
	const summa = calculateSumma(orderAmountValue, tip);

	resultTipAmount.textContent =
		"Tip Amount: " + calculateTip(orderAmountValue, tipPercentageValue) + "$";

	resultSumma.textContent = "Summa: " + summa + "$";
}

inputBtn.onclick = updateResult;
