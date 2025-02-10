import { Injectable } from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
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
  ]

  constructor() { }

  public getAllRecipes()  {
    return [ ...this.recipes ];
  }

  public getRecipe(id: string)  {
    return { ...this.recipes.find(recipe => recipe.id === id) };
  }

  public deleteRecipe(id: string){
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    this.recipes = [
        ...this.recipes.slice(0, index),
        ...this.recipes.slice(index + 1, this.recipes.length)
    ];
  }
}
