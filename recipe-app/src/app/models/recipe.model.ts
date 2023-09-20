export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, image: string, id: number)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = image;
    }
}