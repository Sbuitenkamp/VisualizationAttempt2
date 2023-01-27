import { Object } from "../Object.js";

export class House extends Object
{
    constructor(position, rotation)
    {
        // defaults
        super("LogHouse", "woodenhouse.glb", ["house/Wood062_1K_Color.jpg"], position, rotation);
    }

    SetTexture(model, textures) {
        model.scale.set(.3,.3,.3);
        // model.children[0].visible = false;
        return model;
        model.traverse(o => {
            if (o.isMesh) {
                // todo snowy roof, somehow
                // o.material.map = textures[0];
                if (o.name === "mesh_0") o.material.map = textures[1];
                if (o.name === "mesh_1") o.material.map = textures[1];
                if (o.name === "mesh_2") o.material.map = textures[0];
                if (o.name === "mesh_3") o.material.map = textures[1];
                o.material.map.needsUpdate = true;
                // if (o.name === "mesh_1") o.visible = false;
            }
        });
        return model;
    }
}