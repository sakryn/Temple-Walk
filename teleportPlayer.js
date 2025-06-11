function teleportPlayer(x, z) {
    const player = document.querySelector("#player")

    player.setAttribute("position", { x: x, y: 1, z: z })

}