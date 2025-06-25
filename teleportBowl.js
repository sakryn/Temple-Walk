function teleportBowl(x, z, y) {
    if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
        // All coordinates provided
        window.bowl.setAttribute("position", { x: x, y: y, z: z });
    } else if (typeof x === "number" && typeof z === "number") {
        // Only x and z provided, use default y
        window.bowl.setAttribute("position", { x: x, y: -60, z: z });
    } else {
        // No coordinates provided, use hiro's position
        const hiroPosition = window.hiro.getAttribute("position");
        window.bowl.setAttribute("position", {
            x: hiroPosition.x + 30,
            y: -60,
            z: hiroPosition.z + 30
        });
    }
}