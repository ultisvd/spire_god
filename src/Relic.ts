export class Relic {
    Name: string;
    Description: string;
    Flavor: string;
    Rarity: string;
    Class: string;
    constructor(json: object) {
        this.Name = json.Name;
        this.Description = json.Description;
        this.Flavor = json.Flavor;
        this.Rarity = json.Rarity;
        this.Class = json.Class;
    }
}