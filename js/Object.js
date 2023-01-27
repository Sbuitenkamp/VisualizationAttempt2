import { TextureLoader } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {ObjectData} from "./ObjectData.js";

export class Object
{
    Name;
    FilePath;
    TextureFilePaths;
    Position;
    Rotation;

    #Loader = new GLTFLoader();
    #TextureLoader = new TextureLoader();

    constructor(name, filePath, textureFilePaths, position, rotation)
    {
        this.Name = name;
        this.FilePath = filePath;
        this.TextureFilePaths = textureFilePaths;
        this.Position = position;
        this.Rotation = rotation;
        this.#Loader.setPath("../objects/");
        this.#TextureLoader.setPath("../objects/textures/");
    }

    LoadSelf()
    {
        const self = this;
        return new Promise(async (resolve, reject) => {
            let loadedModel;
            if (self.FilePath) {
                const loadedModelData = await self.#Loader.loadAsync(self.FilePath).catch(e => reject(e));
                loadedModel = loadedModelData.scene;
                loadedModel.animations = loadedModelData.animations ?? [];
            } else if (self.Model) loadedModel = self.Model;
            else reject("No model available for " + typeof self);

            const texturePromises = [];
            for (const textureFilePath of self.TextureFilePaths) texturePromises.push(self.#TextureLoader.loadAsync(textureFilePath).catch(e => reject(e)));
            const textures = await Promise.all(texturePromises).catch(e => reject(e));

            resolve({ instance: self, objectData: new ObjectData(loadedModel, textures) });
        });
    }

    SetupModel({ Model, Textures })
    {
        const model = this.SetTexture(Model, Textures);
        model.position.x = this.Position.x;
        model.position.y = this.Position.y;
        model.position.z = this.Position.z;
        model.rotation.x = this.Rotation.x;
        model.rotation.y = this.Rotation.y;
        model.rotation.z = this.Rotation.z;
        model.rotation.w = this.Rotation.w;
        return model;
    }

    SetTexture(model, textures)
    {
        throw new Error("SetTexture not implemented");
    }
}