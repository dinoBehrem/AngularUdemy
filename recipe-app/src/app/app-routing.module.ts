import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { AppComponent } from "./app.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    { path: "", redirectTo: 'recipes', pathMatch: 'full' },
    {
        path: "recipes", component: RecipesComponent, children: [
            { path: "", component: RecipesStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipesDetailsComponent },
            { path: ":id/edit", component: RecipeEditComponent },
        ]
    },
    { path: "shopping", component: ShopingListComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {

}