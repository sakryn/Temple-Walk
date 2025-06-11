
function changeLevel(sphere, material) {
    currentSrc = material.src.id;

    if (currentSrc === "01") {
        sphere.setAttribute("material", "src: #02; side: back");
        teleportLevelExit(-17,88); // exit for LEVEL 2
        setTimeout(() => {
            teleportPlayer(0,0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "02") {
        
        sphere.setAttribute("material", "src: #03; side: back");
        teleportLevelExit(80,-30); // exit for LEVEL 3
        setTimeout(() => {
            teleportPlayer(0,0);
            changeExit(currentSrc);
        }, 1);    }
    else if (currentSrc === "03") {
        
        sphere.setAttribute("material", "src: #04; side: back");
        teleportLevelExit(-64,55); // exit for LEVEL 4
        setTimeout(() => {
            teleportPlayer(0,0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "04") {
        
        sphere.setAttribute("material", "src: #05; side: back");
        teleportLevelExit(86,-26); // exit for LEVEL 5
        setTimeout(() => {
            teleportPlayer(0,0);
            changeExit(currentSrc);
        }, 1);
    }
    else if (currentSrc === "05") {
        
        sphere.setAttribute("material", "src: #01; side: back");
        teleportLevelExit(-75,-55); // exit for LEVEL 1
        setTimeout(() => {
            teleportPlayer(0,0);
            changeExit(currentSrc);
        }, 1);
    }

    window.exitEnabled = false;
}