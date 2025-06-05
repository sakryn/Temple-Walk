const player = document.querySelector("#player");
const levelExit = document.querySelector("#levelExit");
    function checkIntersection() {
      const playerPos = player.object3D.position;
      const levelExitPos = levelExit.object3D.position;
      
      // Calculate distance between camera and box
      const distance = playerPos.distanceTo(levelExitPos);
      
      // If distance is less than 1 unit (roughly the box's size), change color
      if (distance < 3) {
        levelExit.setAttribute("color", "green");
      } else {
        levelExit.setAttribute("color", "red");
      }
      
      requestAnimationFrame(checkIntersection);
    }
    // Start checking for intersections after scene loads
    document.querySelector('a-scene').addEventListener('loaded', checkIntersection);