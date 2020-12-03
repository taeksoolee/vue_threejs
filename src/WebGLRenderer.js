const WebGLRenderer = {
  name: "WebGLRenderer",
  template: `<div></div>`,
  mounted() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    this.$el.parentElement.appendChild(renderer.domElement);

    // const clock = new THREE.Clock();
    animate();

    function animate() {
      requestAnimationFrame(animate);
      // const delta = clock.getDelta();
      // if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    }
  },
};
