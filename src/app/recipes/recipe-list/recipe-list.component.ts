import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://i.ytimg.com/vi/Wy15xNBTe2U/maxresdefault.jpg' ),
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe 2', 'This is another test', 'https://static01.nyt.com/images/2014/09/02/dining/shakshuka/shakshuka-superJumbo-v2.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
