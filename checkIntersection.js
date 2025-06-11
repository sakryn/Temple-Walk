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

window.exitEnabled = false; // A global variable. It's a surprise tool we'll use for later

    AFRAME.registerComponent('collision-check', {
    init: function () {
        this.player = document.querySelector('#player');
        this.exit = document.querySelector('#levelExit');
        this.sphere = document.querySelector("#background");
        this.material = this.sphere.getAttribute("material");
    },
    
    tick: function () {
        if (!this.player || !this.exit || !window.exitEnabled) return;

        let playerBox = new THREE.Box3().setFromObject(this.player.object3D);
        let exitBox = new THREE.Box3().setFromObject(this.exit.object3D);

        if (playerBox.intersectsBox(exitBox)) {            
            changeLevel(this.sphere, this.material);}
    }
});