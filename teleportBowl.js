function teleportBowl(x, z) {
    const bowl = document.querySelector("#bowl")

    bowl.setAttribute("position", { x: x, y: 0, z: z })

}