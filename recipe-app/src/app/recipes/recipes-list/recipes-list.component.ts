import { Component,  OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})

export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService){}

    ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes();
    }
}
