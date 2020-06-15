import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('pasta', 200),
    new Ingredient('tomato', 3),
    new Ingredient('pepperonccini', 4),
  ];
  constructor() {}

  ngOnInit(): void {}
}
