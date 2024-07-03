export class Relic {
    name: string;
    description: string;
    flavor: string;
    rarity: string;
    class: string;
    constructor(in_Name: string, in_Desc: string, in_Flavor: string,
                in_Rarity: string, in_Class: string) {
        this.name = in_Name;
        this.description = in_Desc;
        this.flavor = in_Flavor;
        this.rarity = in_Rarity;
        this.class = in_Class;
    }
}

export interface Relic_like {
    name: string;
    description: string;
    flavor: string;
    rarity: string;
    class: string;
}