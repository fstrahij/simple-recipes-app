import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../recipe.model";
import {AlertController} from "@ionic/angular";

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
      if(!paramMap.has('id')){
        return;
      }
      let id = paramMap.get('id');

      this.recipe = this.recipeService.getRecipe(id);
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
