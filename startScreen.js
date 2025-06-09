document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("playScene").style.display = "block";

    document.getElementById('playScene').enterVR();

    backgroundMusic();

})