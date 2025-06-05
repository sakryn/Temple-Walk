const music = document.getElementById("bg-music");
            
window.addEventListener("keydown", onKeyPress);

 // Wait for any keypress
 function onKeyPress() {
   // Remove the listener so it doesn't trigger again
   window.removeEventListener("keydown", onKeyPress);

   // Wait 1 seconds, then play music
   setTimeout(() => {
     // Background music volume
     music.volume = 0.5;
     music.play().catch(err => {
       console.warn("Playback blocked:", err);
     });
   }, 1);
 }