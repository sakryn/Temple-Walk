const music = document.getElementById("bg-music");

function backgroundMusic(){
  music.volume = 0.3;
  music.loop = "true";
  music.play();
}

function stopBackgroundMusic(){
  music.pause();
}