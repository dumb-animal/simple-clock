const secondsElement = document.getElementById("seconds");
const minutsElement = document.getElementById("minuts");
const hoursElement = document.getElementById("hours");

function setTime() {
	let time = new Date();
	let s = (time.getSeconds() / 60) * 360;
	let m = (time.getMinutes() / 60) * 360;
    let h = (time.getHours() / 12) * 360;
    
	secondsElement.style.transform = `rotate(${s}deg)`;
	minutsElement.style.transform = `rotate(${m}deg)`;
	hoursElement.style.transform = `rotate(${h}deg)`;
}

let interval = setInterval(setTime, 1000);
