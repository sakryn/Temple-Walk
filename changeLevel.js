
function changeLevel(sphere, material) {

    teleportPlayer(0,0);

    console.log("Material:", material);
    console.log("Material Source ID:", material.src.id);
    currentSrc = material.src.id;
    console.log("Current src:", currentSrc); // Debug line

    if (currentSrc === "01") {
        teleportPlayer(0,0);
        sphere.setAttribute("material", "src: #02; side: back");
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