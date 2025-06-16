window.addEventListener("DOMContentLoaded", function () {
  const player = document.getElementById("player");

  window.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
      //const position = player.getAttribute("position");
      //console.log(`Player position: x=${position.x}, y=${position.y}, z=${position.z}`);
      //timerCountdown(5);
      toggleCaptions();
    }
    if (e.key === "1") {
      //const position = player.getAttribute("position");
      //console.log(`Player position: x=${position.x}, y=${position.y}, z=${position.z}`);
      //console.log("reset");
      //resetTimer();
      changeCaptions("03");
    }
  });
});
