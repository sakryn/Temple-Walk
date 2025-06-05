
window.addEventListener("keydown", function (event) {
    const sphere = this.document.querySelector("#background");

    switch (event.key) {
        
        case "1":
            sphere.setAttribute("src", "#01");
            teleportPlayer(0,0);
            break;

        case "2":
            sphere.setAttribute("src", "#02");
            teleportPlayer(0,0);
            break;

        case "3":
            sphere.setAttribute("src", "#03");
            teleportPlayer(0,0);
            break;

        case "4":
            sphere.setAttribute("src", "#04");
            teleportPlayer(0,0);
            break;

        case "5":
            sphere.setAttribute("src", "#05");
            teleportPlayer(0,0);
            break;
    }
});