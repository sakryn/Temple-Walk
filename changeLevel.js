
function changeLevel(sphere, material) {

    currentSrc = material.src.id;

    if (currentSrc === "01") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #02; side: back");
        teleportLevelExit(-17,88); // exit for LEVEL 2
    }
    else if (currentSrc === "02") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #03; side: back");
        teleportLevelExit(80,-30); // exit for LEVEL 3
    }
    else if (currentSrc === "03") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #04; side: back");
        teleportLevelExit(-64,55); // exit for LEVEL 4
    }
    else if (currentSrc === "04") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #05; side: back");
        teleportLevelExit(86,-26); // exit for LEVEL 5
    }
    else if (currentSrc === "05") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #01; side: back");
        teleportLevelExit(-75,-55); // exit for LEVEL 1
    }
}