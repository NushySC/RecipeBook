import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti alla puttanesca',
      'Spicy pasta',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/puttanesca.jpg?itok=gTWChUgQ)]'
    ),
    new Recipe(
      'Spaghetti arrabiata',
      'Another spicy pasta',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/pennealarrabiatapast_83813_16x9.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
