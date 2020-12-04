const WebGLRenderer = {
  name: "WebGLRenderer",
  props: ["share"],
  mounted() {
    console.log(this.$root.$el.getBoundingClientRect());
    const that = this;
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    this.$el.parentElement.appendChild(renderer.domElement);

    const clock = new THREE.Clock();
    animate();

    function animate() {
      requestAnimationFrame(animate);

      for (const mixer of that.mixers) {
        const delta = clock.getDelta();
        if (mixer) mixer.update(delta);
      }
      renderer.render(that.share.scene, that.share.camera);
    }
  },
  computed: {
    ...Vuex.mapState(["mixers"]),
  },
};
