const PerspectiveCamera = {
  name: "PerspectiveCamera",
  props: ["share"],
  template: `<div></div>`,
  mounted() {
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.set(100, 200, 300);

    this.share.scene.add(camera);
    console.log("add perspective camera!");
  },
};
