import { Object } from "../Object.js";

export class FirePlace extends Object
{
    constructor(position, rotation)
    {
        // defaults
        super("FirePlace", "loghouse.gltf", ["Wood062_1K_Color.jpg", "snow2.jpg"], position, rotation);
    }
}