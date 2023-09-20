export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }

    // Other way to achieve the same result
    // constructor(public name: string, public amount: number){}
}