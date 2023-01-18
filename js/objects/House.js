import { ObjectData } from "../ObjectData.js";

export class House extends ObjectData
{
    constructor(position, rotation)
    {
        // defaults
        super("LogHouse", "loghouse.gltf", ["Wood062_1K_Color.jpg", "Wood062_1K_Normal.jpg", "Wood062_1K_Roughness.jpg"], position, rotation);
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
    }
}