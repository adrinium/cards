export class Card {
    public title: string;
    public tag: string;
    public description: string;
    public imageUrl: string;

    constructor(title: string, tag: string, description: string, imageUrl: string) {
        this.title = title;
        this.tag = tag;
        this.description = description;
        this.imageUrl = imageUrl;
    };
}