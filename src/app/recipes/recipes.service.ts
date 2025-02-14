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
    },
    {
      id: 'r3',
      title: 'Meatloaf',
      imageUrl: 'https://www.allrecipes.com/thmb/r5E_9So8DMtEwFAMtWzpgc0A61Q=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/16354-easy-meatloaf-DDMFS-0034-5186-hero-4x3-30547610d0f64d2fb3c25c0cab909af6.jpg',
      ingredients: ['Ground Beef', 'Egg', 'Onion', 'Ketchup', 'Mustard']
    },
    {
      id: 'r4',
      title: 'Pizza',
      imageUrl: 'https://www.foodandwine.com/thmb/BK0P-VpOvPowtz-okmiaS4kTqvI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
      ingredients: ['Dough', 'Flour', 'Tomato Sauce', 'Mozzarela', 'Basil']
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
        ...this.recipes.slice(index + 1)
    ];
  }
}
