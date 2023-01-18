import { TextureLoader } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
export class ObjectLoader
{
    ObjectsLoaded = 0;
    #Loader = new GLTFLoader();
    #TextureLoader = new TextureLoader();

    constructor()
    {
        this.#Loader.setPath("../objects/");
        this.#TextureLoader.setPath("../objects/textures/")
    }

    async Load(objectDatas)
    {
        const promises = [];
        for (const objectData of objectDatas) promises.push(this.#Loader.loadAsync(objectData.FilePath));
        // Promise.all(promises).then(results => {
        //     for (const result of results) {
        //          const data = result.scene.children[0];
        //          const model =
        //         loadedElements.set(result.name, result)
        //     }
        // });
        // todo make collection based on object name
        const loaded = await Promise.all(promises);
        for (const key in loaded) {
            const promisedTextures = []
            for (const textureFilePath of objectDatas[key].TextureFilePaths) promisedTextures.push(this.#TextureLoader.loadAsync(textureFilePath));
            const textures = await Promise.all(promisedTextures);
            loaded[key] = objectDatas[key].SetupModel(loaded[key], textures); // this works???
            self.ObjectsLoaded++;
        }

        return loaded;
    }
}