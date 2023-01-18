import { SceneHandler } from "./SceneHandler.js";

async function main() {
    const container = document.querySelector("#scene");
    const sceneHandler = new SceneHandler(container);
    await sceneHandler.Init();

    sceneHandler.Start();
}

main().catch(e => console.error(e));