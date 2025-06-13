function teleportTimer() {
    const hiro = document.querySelector("#hiro");
    const timer = document.querySelector("#timer");
    const hiroPosition = hiro.object3D.position;

    timer.setAttribute("position", { x: hiroPosition.x, y: hiroPosition.y + 4, z: hiroPosition.z });

}