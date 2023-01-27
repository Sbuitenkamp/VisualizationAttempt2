import { Object } from "../Object.js";

export class Tree extends Object
{
    constructor(position, rotation)
    {
        // defaults
        super("Tree", "tree1.glb", ["house/Wood062_1K_Color.jpg"], position, rotation);
    }

    SetTexture(model, textures)
    {
        model.scale.set(.008,.008,.008);
        // model.children[0].visible = false;
        return model;
    }
}