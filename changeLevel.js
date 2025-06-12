
function changeLevel(sphere, material) {
    currentSrc = material.src.id;

    if (currentSrc === "01") {
        sphere.setAttribute("material", "src: #02; side: back");
        teleportLevelExit(-17, 88); // exit for LEVEL 2
        teleportHiro(-24,44);
        teleportBowl(-21,47);
        setTimeout(() => {
            teleportPlayer(0, 0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "02") {

        sphere.setAttribute("material", "src: #03; side: back");
        teleportLevelExit(80, -30); // exit for LEVEL 3
        teleportHiro(37,6);
        teleportBowl(37,2);
        setTimeout(() => {
            teleportPlayer(0, 0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "03") {

        sphere.setAttribute("material", "src: #04; side: back");
        teleportLevelExit(-64, 55); // exit for LEVEL 4
        teleportHiro(-50,17);
        teleportBowl(-50,21);
        setTimeout(() => {
            teleportPlayer(0, 0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "04") {

        sphere.setAttribute("material", "src: #05; side: back");
        teleportLevelExit(86, -26); // exit for LEVEL 5
        teleportHiro(32,-23);
        teleportBowl(35,-21);
        setTimeout(() => {
            teleportPlayer(0, 0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "05") {

        sphere.setAttribute("material", "src: #01; side: back");
        teleportLevelExit(-75, -55); // exit for LEVEL 1
        teleportHiro(-24,-37);
        teleportBowl(-22,-35);
        setTimeout(() => {
            teleportPlayer(0, 0);
            changeExit(currentSrc);
        }, 1);
    }

    window.exitEnabled = false;
    window.audioPlayed = false;
}