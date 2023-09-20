import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent {

  @ViewChild("nameInput", {static: false}) nameElementRef!: ElementRef;
  @ViewChild("amountInput", {static: false}) amountElementRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService){}

  deafultColor: string = 'yellow';
  highlightColor: string = 'red';

  addShoppingIntem(){
    var ingredient = new Ingredient(this.nameElementRef.nativeElement.value, this.amountElementRef.nativeElement.value);

    this.shoppingListService.addNewIgredient(ingredient);
  }
}
