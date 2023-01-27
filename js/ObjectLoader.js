import { TextureLoader } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {Collection} from "@discordjs/collection";
export class ObjectLoader
{
    ObjectsLoaded = 0;

    #Loader = new GLTFLoader();
    #TextureLoader = new TextureLoader();

    constructor()
    {
        this.#Loader.setPath("../objects/");
        this.#TextureLoader.setPath("../objects/textures/");
    }

    async Load(objectDatas)
    {
        const promises = [];
        for (const objectData of objectDatas) promises.push(objectData.LoadSelf());
        const loaded = await Promise.all(promises).catch(e => console.error(e));
        const finished = [];
        for (const loadedObject of loaded) finished.push(loadedObject.instance.SetupModel(loadedObject.objectData));

        console.log(finished.length + " object(s) loaded.");
        return new Collection(finished.map((obj, i) => [i, obj]));
    }
}