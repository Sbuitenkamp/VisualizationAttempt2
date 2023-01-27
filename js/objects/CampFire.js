import { Object } from "../Object.js";

export class CampFire extends Object
{
    constructor(position, rotation)
    {
        // defaults
        super("CampFire", "Campfire.glb", [], position, rotation);
    }

    SetTexture(model, textures)
    {
        model.scale.set(.5,.5,.5);
        model.animations = model.animations.splice(5, 20);
        return model;

        model.traverse(o => {
            if (o.isMesh) o.material.map = textures[1];
        });
    }
}