AFRAME.registerComponent('face-player', {
    tick: function () {
        const object = this.el;
        const player = document.querySelector('#player');
        if (!player) return;

        const objectPos = new THREE.Vector3();
        const playerPos = new THREE.Vector3();

        object.object3D.getWorldPosition(objectPos);
        player.object3D.getWorldPosition(playerPos);

        object.object3D.lookAt(playerPos);
    }
});
