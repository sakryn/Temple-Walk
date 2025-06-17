const hiro = document.querySelector('#hiro');

function rotationCorrection() {
    let src = hiro.getAttribute("gltf-model");
    let element = document.querySelector(`[src="${src}"]`);
    let id = element ? element.id : null; // id will be Hiro_01, Hiro_02, etc

    if (id === "Hiro_01"){ return 270; }
    else if (id === "Hiro_02"){ return 0; }
    else if (id === "Hiro_03"){ return 310; }
    else if (id === "Hiro_04"){ return 270; }
    else if (id === "Hiro_05"){ return 270; }
    else if (id === "Hiro_06"){ return 260; }
    else if (id === "Hiro_07"){ return 245; }
    else if (id === "Hiro_08"){ return 270; }
    else if (id === "Hiro_09"){ return 0; }
    else { return 0; }

}

