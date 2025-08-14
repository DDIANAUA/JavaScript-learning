"use strict";

const time = document.getElementById("time");
const FullBtn = document.getElementById("FullBtn");
const DayBtn = document.getElementById("DayBtn");
const HoursBtn = document.getElementById("HoursBtn");

let modeFormat = "Full";

update();
setInterval(update, 1000);

function bindMode(name) {
	return function () {
		modeFormat = name;
		update();
	};
}

FullBtn.onclick = bindMode("Full");
DayBtn.onclick = bindMode("Day");
HoursBtn.onclick = bindMode("Hours");

function update() {
	time.textContent = formatMode(modeFormat);
}

function formatMode(mode) {
	const now = new Date();
	switch (mode) {
		case "Hours":
			return now.toLocaleTimeString();
		case "Day":
			return now.toLocaleDateString();
		case "Full":
			return now.toLocaleDateString() + " " + now.toLocaleTimeString();
	}
}
