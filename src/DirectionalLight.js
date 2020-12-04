const DirectionalLight = {
  name: "DirectionalLight",
  props: ["share"],
  mounted() {
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 200, 100);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.top = 180;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.left = -120;
    directionalLight.shadow.camera.right = 120;

    this.share.scene.add(directionalLight);
    console.log("add directional light!");
  },
};
