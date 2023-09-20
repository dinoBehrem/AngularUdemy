import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit{

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {
   this.ingredients = this.shoppingListService.getIngredients(); 
   this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  addNewIgredient(ingredient: Ingredient){
    this.shoppingListService.addNewIgredient(ingredient);
  }
}
