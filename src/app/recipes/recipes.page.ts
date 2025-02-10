import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: false
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
      {
        id: 'r1',
        title: 'Schnitzel',
        imageUrl: 'https://thestayathomechef.com/wp-content/uploads/2024/04/Authentic-German-Schnitzel-H1-1200x720.jpg',
        ingredients: ['French Fries', 'Pork Meat', 'Salad']
      },
      {
        id: 'r2',
        title: 'Spaghetti',
        imageUrl: 'https://img.taste.com.au/_e6onvZ7/w720-h480-cfill-q80/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg',
        ingredients: ['Spaghetti', 'Meat', 'Tomatos']
      }
  ];

  constructor() { }

  ngOnInit() {
    console.log('recipes initialized');
  }

}
