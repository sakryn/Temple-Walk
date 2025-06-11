document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("loadingText").style.display = "block";

    setTimeout(() => {
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("playScene").style.display = "block";
        document.getElementById('playScene').enterVR();
        backgroundMusic();
    }, 1);

})