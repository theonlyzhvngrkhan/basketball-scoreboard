let homeCount = 0;
let guestCount = 0;
let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

function plus1Home() {
	homeCount += 1;
	homePoints.textContent = homeCount;
}

function plus2Home() {
	homeCount += 2;
	homePoints.textContent = homeCount;
}

function plus3Home() {
	homeCount += 3;
	homePoints.textContent = homeCount;
}

function plus1Guest() {
	guestCount += 1;
	guestPoints.textContent = guestCount;
}

function plus2Guest() {
	guestCount += 2;
	guestPoints.textContent = guestCount;
}

function plus3Guest() {
	guestCount += 3;
	guestPoints.textContent = guestCount;
}