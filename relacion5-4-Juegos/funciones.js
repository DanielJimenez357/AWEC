let interval;

const start = () => {
	interval = setInterval(() => {
		let seconds = document.getElementById("segundos");
		seconds.innerHTML = parseInt(seconds.innerHTML) + 1;
		if (seconds.innerHTML == 60) {
			seconds.innerHTML = 0;
			let minutes = document.getElementById("minutos");
			minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
		}
	}, 1000);
};

const stop = () => {
	clearTimeout(interval);
};

const reset = () => {
	let seconds = document.getElementById("segundos");
	seconds.innerHTML = "00";
	let minutes = document.getElementById("minutos");
	minutes.innerHTML = "00";
    stop ()
};
