import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
