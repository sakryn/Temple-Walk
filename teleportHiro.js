function teleportHiro(x, z) {
    const hiro = document.querySelector("#hiro")

    hiro.setAttribute("position", { x: x, y: 0, z: z })

}