const PerspectiveCamera = {
  name: "PerspectiveCamera",
  props: {
    share: Object,
    fov: {
      type: Number,
      default: 45,
    },
    aspective: {
      type: Number,
      default: window.innerWidth / window.innerHeight,
    },
    near: {
      type: Number,
      default: 1,
    },
    far: {
      type: Number,
      default: 2000,
    },
  },
  template: `
    <div>
      <slot
        v-bind:scene="scene"
        v-bind:camera="camera"
      ></slot>
    </div>
  `,
  data: function () {
    return {
      camera: new THREE.PerspectiveCamera(
        this.fov,
        this.aspective,
        this.near,
        this.far
      ),
      scene: this.share.scene,
    };
  },
  mounted() {
    this.scene = this.share.scene;
    this.camera.position.set(100, 200, 300);

    this.scene.add(this.camera);
    this.camera = this.camera;
    console.log("add perspective camera!");
  },
};
