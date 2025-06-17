//const hiro = document.querySelector('#hiro');

function changeModel(id) {
    if (id === "Hiro_01") { hiro.setAttribute("gltf-model", "hiro-animations/Animation_Long_Breathe_and_Look_Around_withSkin.glb"); }
    else if (id === "Hiro_02") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Running_withSkin.glb"); }
    else if (id === "Hiro_03") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Stand_and_Chat_withSkin.glb"); }
    else if (id === "Hiro_04") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Talk_Passionately_withSkin.glb"); }
    else if (id === "Hiro_05") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Talk_with_Hands_Open_withSkin.glb"); }
    else if (id === "Hiro_06") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Talk_with_Left_Hand_on_Hip_withSkin.glb"); }
    else if (id === "Hiro_07") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Talk_with_Left_Hand_Raised_withSkin.glb"); }
    else if (id === "Hiro_08") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Talk_with_Right_Hand_Open_withSkin.glb"); }
    else if (id === "Hiro_09") { window.hiro.setAttribute("gltf-model", "hiro-animations/Animation_Walking_withSkin.glb"); }

}
