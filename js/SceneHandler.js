import { Scene, PerspectiveCamera, WebGLRenderer, Vector3, AmbientLight, DirectionalLight, Quaternion, TextureLoader } from 'three';
import { ObjectLoader } from "./ObjectLoader.js";
import { Collection } from "@discordjs/collection";
import { House } from "./objects/House.js";
import { Terrain } from "./objects/Terrain.js";
import {Tree} from "./objects/Tree.js";

export class SceneHandler
{
    #Camera;
    #Loader;
    #LoadedObjects = new Collection();

    Renderer;
    Scene;

    constructor(container) {
        this.Scene = new Scene();
        this.#Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
        this.#Camera.position.set(0,0,0)
        this.Renderer = new WebGLRenderer();
        this.Renderer.setPixelRatio(window.devicePixelRatio);
        this.Renderer.setSize(window.innerWidth, window.innerHeight);
        this.#Loader = new ObjectLoader();

        const textureLoader = new TextureLoader();
        this.Scene.background = textureLoader.load("../objects/textures/world/night-skybox.jpg");
        document.body.appendChild(this.Renderer.domElement);
    }

    // init scene
    async Init() {
        const light = new AmbientLight(0xCCCCCC);
        const directionalLight = new DirectionalLight((0xFFFFFF));
        directionalLight.position.set(0, 1, 1).normalize();
        this.Scene.add(light);
        this.Scene.add(directionalLight);
        const objectsToLoad = [
            new House(new Vector3(6, -1, -1), new Quaternion(0, -.3, .2, 0)),
            new Terrain(new Vector3(8, -4, -2), new Quaternion(45.5,-12,0,1)),
            new Tree(new Vector3(10, 0, 1), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 2), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 3), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 4), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 5), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 6), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 7), new Quaternion(25, .2, 25.6, 1)),
            new Tree(new Vector3(10, 0, 8), new Quaternion(25, .2, 25.6, 1)),
        ];
        this.#LoadedObjects = await this.#Loader.Load(objectsToLoad);
        console.log(this.#LoadedObjects.get(0))
        for (const obj of this.#LoadedObjects) {
            console.log(obj)
            this.Scene.add(obj[1]);
        }
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