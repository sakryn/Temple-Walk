function teleportHiro(x, z) {
    const hiro = document.querySelector("#hiro")

    hiro.setAttribute("position", { x: x, y: 1, z: z })

}