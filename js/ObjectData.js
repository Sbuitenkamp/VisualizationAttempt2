export class ObjectData
{
    Name;
    FilePath;
    TextureFilePaths;
    Position;
    Rotation;

    constructor(name, filePath, textureFilePaths, position, rotation)
    {
        this.Name = name;
        this.FilePath = filePath;
        this.TextureFilePaths = textureFilePaths;
        this.Position = position;
        this.Rotation = rotation;
    }

    SetupModel(data, textures)
    {
        const model = data.scene;
        this.SetTexture(model, textures);
        model.position.x = this.Position.x;
        model.position.y = this.Position.y;
        model.position.z = this.Position.z;
        model.rotation.x = this.Rotation.x;
        model.rotation.y = this.Rotation.y;
        model.rotation.z = this.Rotation.z;
        model.rotation.w = this.Rotation.w;
        return model;
    }

    SetTexture(model, textures) {
        throw new Error("SetTexture not implemented");
    }
}