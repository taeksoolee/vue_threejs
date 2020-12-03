const Scene = {
  name: "Scene",
  template: `
    <div>
      <slot v-bind:scene="scene"></slot>
    </div>
  `,
  data: function () {
    return {
      scene: new THREE.Scene(),
    };
  },
  mounted() {
    this.scene.background = new THREE.Color(0xa0a0a0);
  },
};
