import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: false
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
      private activatedRoute: ActivatedRoute,
      private recipeService: RecipesService,
      private router: Router,
      private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('id')) this.router.navigate(['recipes']);

      const id = paramMap.get('id');

      this.recipe = this.recipeService.getRecipe(id);

      if(!Object.keys(this.recipe).length) this.router.navigate(['recipes']);
    });
  }

  public deleteRecipe() {
    this.alertCtrl.create({
      header: 'Delete Recipe',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.recipe.id);

            this.router.navigate(['recipes']);
          }
        }
      ]
    }).then(alertEl=> alertEl.present());
  }
}
