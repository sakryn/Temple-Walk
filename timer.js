const timer = document.querySelector("#timer");


function timerCountdown(duration) {

    let i = 0;
    const startTime = Date.now();

    let interval = setInterval(() => {
        i++;

        let elapsed = (Date.now() - startTime) / 1000;
        let percent = Math.min(1, elapsed / duration);
        let theta = percent * 360;
        timer.setAttribute("geometry", { thetaLength: theta });

        if (i >= duration) {
            clearInterval(interval);
        }

    }, 1000)

}

function resetTimer() {
    timer.setAttribute("geometry", { thetaLength: 0 });
}

