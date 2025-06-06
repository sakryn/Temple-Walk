function teleportLevelExit(x, z){
    const exit = document.querySelector("#levelExit")

    exit.setAttribute("position", {x: x, y: 1, z: z})

}