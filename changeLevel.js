
function changeLevel(sphere, material) {

    currentSrc = material.src.id;

    if (currentSrc === "01") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #02; side: back");
        teleportLevelExit(0,20) // set exit location for NEXT level
    }
    else if (currentSrc === "02") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #03; side: back");
    }
    else if (currentSrc === "03") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #04; side: back");
    }
    else if (currentSrc === "04") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #05; side: back");
    }
    else if (currentSrc === "05") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #01; side: back");
    }
}