const Scene = {
  name: "Scene",
  template: `
    <div style="width: 100%; height: 100%;">
      <slot 
        v-bind:scene="scene"
      ></slot>
    </div>
  `,
  data: function () {
    return {
      scene: new THREE.Scene(),
    };
  },
  mounted() {
    this.scene.background = new THREE.Color(0x000000);
  },
};
