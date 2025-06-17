/*const player = document.querySelector("#player");
const levelExit = document.querySelector("#levelExit");
const sphere = document.querySelector("#background");

    function checkIntersection() {
      const playerPos = player.object3D.position;
      const levelExitPos = levelExit.object3D.position;
      const material = sphere.getAttribute("material");


      // Calculate distance between camera and box
      const distance = playerPos.distanceTo(levelExitPos);
      
      // If distance is less than 1 unit (roughly the box's size), change color
      if (distance < 7) {
        changeLevel(sphere, material);
      } else {
      }
      
      requestAnimationFrame(checkIntersection);
    }
    // Start checking for intersections after scene loads
    document.querySelector('a-scene').addEventListener('loaded', checkIntersection);*/



AFRAME.registerComponent('collision-check', {
  init: function () {
    this.player = document.querySelector('#player');
    this.exit = document.querySelector('#levelExit');
    this.sphere = document.querySelector("#background");
    this.material = this.sphere.getAttribute("material");
    this.hiro = document.querySelector("#hiro");
  },

  tick: function () {

    // Check distance between player and hiro to begin dialogue
    let playerPos = this.player.object3D.position;
    let hiroPos = this.hiro.object3D.position;
    let distance = playerPos.distanceTo(hiroPos);
    if (distance < 20 && !window.audioPlayed) { // Maybe check if the game was completed? A future task...
      window.audioPlayed = true;
      audioPlayer(this.material.src.id);
    }

    // Check intersection between player and level exit
    if (!this.player || !this.exit || !window.exitEnabled) return;

    let playerBox = new THREE.Box3().setFromObject(this.player.object3D);
    let exitBox = new THREE.Box3().setFromObject(this.exit.object3D);

    if (playerBox.intersectsBox(exitBox)) {
      changeLevel(this.sphere, this.material);
    }


  }
});