AFRAME.registerComponent('face-player', {
    tick: function () {
        const hiro = this.el;
        const player = document.querySelector('#player');
        if (!player) return;

        const hiroPos = new THREE.Vector3();
        const playerPos = new THREE.Vector3();

        hiro.object3D.getWorldPosition(hiroPos);
        player.object3D.getWorldPosition(playerPos);

        hiro.object3D.lookAt(playerPos);
    }
});
