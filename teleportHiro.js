function teleportHiro(x, z) {
    const hiro = document.querySelector("#hiro");

    hiro.setAttribute("position", { x: x, y: -0.5, z: z });

}

function teleportHiro(x, y, z) {
    const hiro = document.querySelector("#hiro");

    hiro.setAttribute("position", { x: x, y:y, z: z });

}