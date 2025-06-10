function changeExit(currentLevel){

    let levelExit = document.getElementById('levelExit');


    if (currentLevel === "01"){
        levelExit.setAttribute("gltf-model", "GLBs/Bridge GLB.glb");
    }

    else if (currentLevel === "02"){
        levelExit.setAttribute("gltf-model", "GLBs/Gold GLB.glb");
    }

    else if (currentLevel === "03"){
        levelExit.setAttribute("gltf-model", "GLBs/Red Lantern.glb");
    }

    else if (currentLevel === "04"){
        levelExit.setAttribute("gltf-model", "GLBs/Lotus Flower.glb");
    }

    else if (currentLevel === "05"){
        levelExit.setAttribute("gltf-model", "GLBs/Japanese Gate.glb");
    }

}

    // given currentLevel:
        // change exit model
        // change scale
        // (optional) change exit rotation
    
    // should be called within changeLevel(), so that id # can be passed
