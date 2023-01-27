import { Object } from "../Object.js";

export class Tree extends Object
{
    constructor(position, rotation)
    {
        // defaults
        super("LogTree", "logtree.gltf", [], position, rotation);
    }

    SetTexture(model, textures) {
        model.scale.set(1,1,1);
        model.traverse(o => {
            if (o.isMesh) {
                if (o.name === "mesh_0") o.material.map = textures[2];
                if (o.name === "mesh_1") o.material.map = textures[1];
                if (o.name === "mesh_2") o.material.map = textures[0];
                if (o.name === "mesh_3") o.material.map = textures[2];
                // if (o.name === "mesh_1") o.visible = false;
            }
        });
        return model;
    }
}