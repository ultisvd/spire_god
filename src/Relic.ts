export class Relic {
    Name: string;
    Description: string;
    Flavor: string;
    Rarity: string;
    Class: string;
    constructor(in_Name: string, in_Desc: string, in_Flavor: string,
                in_Rarity: string, in_Class: string) {
        this.Name = in_Name;
        this.Description = in_Desc;
        this.Flavor = in_Flavor;
        this.Rarity = in_Rarity;
        this.Class = in_Class;
    }
}

export interface Relic_like {
    Name: string;
    Description: string;
    Flavor: string;
    Rarity: string;
    Class: string;
}