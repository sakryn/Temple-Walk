function teleportTimer() {
    const hiro = document.querySelector("#hiro");
    const timer = document.querySelector("#timer");
    const hiroPosition = hiro.object3D.position;

    timer.setAttribute("position", { x: hiroPosition.x, y: hiroPosition.y, z: hiroPosition.z});

}


function teleportTimer(x,y,z) {
    const timer = document.querySelector("#timer");

    timer.setAttribute("position", { x: x, y: y, z: z});

}