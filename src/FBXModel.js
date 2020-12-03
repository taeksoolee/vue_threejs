const FBXModel = {
  props: ["share", "loader", "path", "file", "isActionModel"],
  mounted: function () {
    const scene = this.share.scene;
    this.loader.load(this.path + this.file, function (object) {
      console.log(object);
      if (this.isActionModel) {
        const mixer = new THREE.AnimationMixer(object);
        const action = mixer.clipAction(object.animations[0]);
        action.play();
      }

      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      console.log(scene);
      scene.add(object);
    });
  },
};
