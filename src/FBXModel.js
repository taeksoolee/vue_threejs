const FBXModel = {
  name: "fbx-model",
  props: ["share", "path", "file", "isActionModel"],
  mounted: async function () {
    const scene = this.share.scene;
    const that = this;

    function getObj() {
      return new Promise(function (resolve, reject) {
        that.loader.load(that.path + that.file, function (object) {
          resolve(object);
        });
      });
    }

    const object = await getObj();
    console.log(object);
    if (this.isActionModel) {
      const mixer = new THREE.AnimationMixer(object);
      const action = mixer.clipAction(object.animations[0]);
      action.play();

      that.mixers.push(mixer);
    }

    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene.add(object);
    that.models.push(object);
  },
  computed: {
    ...Vuex.mapState({
      loader: "fbxLoader",
      models: "models",
      mixers: "mixers",
    }),
  },
};
