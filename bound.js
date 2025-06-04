AFRAME.registerComponent("circular-boundary", {
  tick: function () {
    const pos = this.el.object3D.position;
    const radius = 90;

    // Distance from center (0, 0) on XZ plane
    const distance = Math.sqrt(pos.x * pos.x + pos.z * pos.z);

    // If outside the circle, clamp it back to the edge
    if (distance > radius) {
      const scale = radius / distance;
      pos.x *= scale;
      pos.z *= scale;
    }
  }
});
