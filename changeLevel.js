
function changeLevel(sphere, material) {
    currentSrc = material.src.id;

    if (currentSrc === "01") {
        sphere.setAttribute("material", "src: #02; side: back");
        teleportLevelExit(-17, 88); // exit for LEVEL 2
        teleportHiro(-34, -80, 33);
        teleportBowl();
        setTimeout(() => {
            teleportPlayer(24, -74);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "02") {

        sphere.setAttribute("material", "src: #03; side: back");
        teleportLevelExit(80, -30); // exit for LEVEL 3
        teleportHiro(69, -80, 18);
        teleportBowl(25,-16);
        setTimeout(() => {
            teleportPlayer(-72,25);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "03") {

        sphere.setAttribute("material", "src: #04; side: back");
        teleportLevelExit(-64, 55); // exit for LEVEL 4
        teleportHiro(-64, -80, 11);
        teleportBowl();
        setTimeout(() => {
            teleportPlayer(55,-46);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "04") {

        sphere.setAttribute("material", "src: #05; side: back");
        teleportLevelExit(86, -26); // exit for LEVEL 5
        teleportHiro(68, -80, 14);
        teleportBowl(28,-28);
        setTimeout(() => {
            teleportPlayer(-65,37);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "05") {

        sphere.setAttribute("material", "src: #01; side: back");
        teleportLevelExit(-75, -55); // exit for LEVEL 1
        teleportHiro(-24, -80, -37);
        teleportBowl();
        setTimeout(() => {
            teleportPlayer(74, 44);
            changeExit(currentSrc);
        }, 1);
    }

    hideCaptions();
    teleportTimer();
    resetTimer();

    window.exitEnabled = false;
    window.audioPlayed = false;
}