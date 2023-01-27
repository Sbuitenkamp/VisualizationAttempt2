import { PlaneGeometry, MeshBasicMaterial, DoubleSide, Mesh } from "three";
import { Object } from "../Object.js";

export class Terrain extends Object
{
    Model;
    #Coordinates = [
        1,2,3,1,2,3,
        1,2,3,1,2,3,
        1,2,3,1,2,3,
        1,2
    ];

    constructor(position, rotation)
    {
        // defaults
        super("Terrain", undefined, ["world/snow1.jpg", "world/snow2.jpg", "world/snow3.jpg", "world/snow4.jpg", ], position, rotation);
        const geometry = new PlaneGeometry(20,60,10,10);
        const material = new MeshBasicMaterial({ color: 0xf8f8f8, side: DoubleSide });
        this.Model = new Mesh(geometry, material);
    }

    SetTexture(model, textures)
    {
        model.traverse(o => {
            if (o.isMesh) o.material.map = textures[1];
        });
        return model;
    }
}