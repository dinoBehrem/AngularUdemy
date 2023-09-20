import { EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Tomato soup', 'This is a tomato soup!', 'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Tomato-Soup-Recipe-Video.jpg', 1),
        new Recipe('Kavada soup', 'This is a tomato soup!', 'https://www.inspiredtaste.net/wp-content/uploads/2022/11/Tomato-Soup-Recipe-Video.jpg', 2)
      ];

    selectedRecipe = new EventEmitter<Recipe>();

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipeById(id: number): Recipe | undefined {
        return this.recipes[id];
    }
}