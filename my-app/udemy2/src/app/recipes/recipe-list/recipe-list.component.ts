import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',  'https://eatforum.org/content/uploads/2018/12/IMG_3617-e1547689389449-1200x675.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test',  'https://eatforum.org/content/uploads/2018/12/IMG_3617-e1547689389449-1200x675.jpg')
  ];
}
