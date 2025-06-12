function changeBowl(){
    const gltf = document.querySelector("#bowl").getAttribute('gltf-model'); //GLBs/Cracked Bowl GLB.glb
    
    if (gltf === "GLBs/Cracked Bowl GLB.glb"){
        document.querySelector("#bowl").setAttribute("gltf-model", "GLBs/Repaired Cracked Bowl.glb");
    }
    else {
        document.querySelector("#bowl").setAttribute("gltf-model", "GLBs/Cracked Bowl GLB.glb");
    }
}