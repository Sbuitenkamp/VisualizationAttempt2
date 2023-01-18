import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, AmbientLight, DirectionalLight, Quaternion } from 'three';
import { ObjectLoader } from "./ObjectLoader.js";
import { ObjectData } from "./ObjectData.js";
import { Collection } from "@discordjs/collection";
import { House } from "./objects/House.js";

export class SceneHandler
{
    // private
    #Camera;
    #Loader;
    #LoadedObjects = new Collection();

    // public
    Renderer;
    Scene;

    constructor(container) {
        this.Scene = new Scene();
        this.#Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
        this.#Camera.position.set(0,0,0)
        this.Renderer = new WebGLRenderer();
        this.Renderer.setClearColor(0xC5C5C3);
        this.Renderer.setPixelRatio(window.devicePixelRatio);
        this.Renderer.setSize(window.innerWidth, window.innerHeight);

        this.#Loader = new ObjectLoader();

        document.body.appendChild(this.Renderer.domElement);
    }

    async AddObjects(objects) {
        this.#LoadedObjects = await this.#Loader.Load(objects);
    }

    // init scene
    async Init() {
        const light = new AmbientLight(0xCCCCCC);
        const directionalLight = new DirectionalLight((0xFFFFFF));
        directionalLight.position.set(0, 1, 1).normalize();
        this.Scene.add(light);
        this.Scene.add(directionalLight);
        const objectsToLoad = [
            new House(new Vector3(5, 0, -2), new Quaternion(45.5, .2, 25.6, 0)),
            // new ObjectData("Parrot", "../objects/Parrot.glb", new Vector3(100, 0, 1))
        ];
        await this.AddObjects(objectsToLoad);

        // console.log(this.#LoadedObjects)
        for (const loadedObject of this.#LoadedObjects) this.Scene.add(loadedObject);
        console.log(this.#Loader.ObjectsLoaded + " objects loaded.");
    }

    // start animation loop
    Start() {
        const self = this;
        this.#Camera.lookAt(new Vector3(100,0,1));
        function startAnim() {
            requestAnimationFrame(startAnim);
            self.Renderer.render(self.Scene, self.#Camera);
        }
        startAnim();
    }
}