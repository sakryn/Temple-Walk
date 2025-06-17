/*AFRAME.registerComponent('face-player', {
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
*/

AFRAME.registerComponent('face-player', {
    tick: function () {
        const player = document.querySelector('#player');
        const box = this.el;
        if (!player) return;

        let playerPos = player.object3D.position;
        let boxPos = box.object3D.position;

        // Calculate direction in XZ plane
        let dx = playerPos.x - boxPos.x;
        let dz = playerPos.z - boxPos.z;

        let angleY = Math.atan2(dx, dz) * 57.29578; // angle in degrees

        // Convert to degrees and apply rotation
        box.setAttribute("rotation", { x: 0, y: angleY, z: 0 });
    }
});