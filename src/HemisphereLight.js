const HemisphereLight = {
  name: "HemisphereLight",
  props: ["share"],
  mounted() {
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemisphereLight.position.set(0, 200, 0);

    this.share.scene.add(hemisphereLight);
    console.log("add hemisphere light!");
  },
};
