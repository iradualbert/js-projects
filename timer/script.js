document.addEventListener("DOMContentLoaded", function () {
	// select elements
	const timeLeft = document.querySelector("#time-left");
	const startPauseBtn = document.querySelector("#start-pause-btn");
    const resetBtn = document.querySelector("#reset-btn");
    const defaultSeconds = 3600;
    var seconds = defaultSeconds;
	var interval;
    var isRunning = false;
    timeLeft.innerText = convertSeconds(defaultSeconds);
    

    function convertSeconds(s) {
        let totalSeconds = s;
        const hours = Math.floor(totalSeconds / (60 * 60)).toString();
        totalSeconds = totalSeconds % 3600;
        const minutes = Math.floor(totalSeconds / 60).toString();
        const sec = (totalSeconds % 60).toString();
        return hours.padStart(2, "0")+  ":" + minutes.padStart(2, "0") + ":" + sec.padStart(2, "0");
    }

    function start() {
        isRunning = true;
        if (seconds === 0) return;
        startPauseBtn.innerText = "Pause";
        interval = setInterval(() => {
            if (seconds === 0) {
                clearInterval(interval);
                stop()
                return;
            }
			seconds = seconds - 1;
            timeLeft.innerText = convertSeconds(seconds);
        }, 1000);
	}

	function pause() {
        clearInterval(interval);
        isRunning = false;
		startPauseBtn.innerText = "Start";
	}

	function stop() {
		seconds = defaultSeconds;
		isRunning = false;
		clearInterval(interval);
        timeLeft.innerText = convertSeconds(seconds);
        startPauseBtn.innerText = "Start";
	}

	// add event listeners to the buttons
    startPauseBtn.onclick = () => {
        isRunning ? pause() : start()
    }
	resetBtn.addEventListener("click", stop);
});
