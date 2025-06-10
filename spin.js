AFRAME.registerComponent('spin', {
    schema: {
        speed: {type: 'number', default: 25} // Rotation speed in degrees per second
    },
    
    tick: function (time, timeDelta) {
        let rotation = this.el.object3D.rotation;
        let deltaRotation = (this.data.speed * timeDelta) / 1000; // Convert to seconds
        
        rotation.y += THREE.MathUtils.degToRad(deltaRotation);
        this.el.object3D.rotation.set(rotation.x, rotation.y, rotation.z);
    }
});