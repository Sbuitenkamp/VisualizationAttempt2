export class ObjectData
{
    Model;
    Textures = [];
    Animations;

    constructor(model, textures, animations)
    {
        this.Model = model;
        this.Textures = textures;
        this.Animations = animations;
    }
}