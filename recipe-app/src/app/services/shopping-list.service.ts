import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Observable } from "rxjs";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient("tomato", 5),
        new Ingredient('potato', 6)
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    addNewIgredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}