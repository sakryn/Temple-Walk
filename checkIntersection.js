const player = document.querySelector("#player");
const levelExit = document.querySelector("#levelExit");
const sphere = document.querySelector("#background");

    function checkIntersection() {
      const playerPos = player.object3D.position;
      const levelExitPos = levelExit.object3D.position;
      const material = sphere.getAttribute("material");


      // Calculate distance between camera and box
      const distance = playerPos.distanceTo(levelExitPos);
      
      // If distance is less than 1 unit (roughly the box's size), change color
      if (distance < 3) {
        levelExit.setAttribute("color", "green");
        changeLevel(sphere, material);
      } else {
        levelExit.setAttribute("color", "red");
        //pass;
      }
      
      requestAnimationFrame(checkIntersection);
    }
    // Start checking for intersections after scene loads
    document.querySelector('a-scene').addEventListener('loaded', checkIntersection);