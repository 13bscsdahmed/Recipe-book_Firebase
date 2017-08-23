import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router"
import {Recipe} from "../recipe"
import {Subscription} from "rxjs/Subscription"
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import{RecipeService} from "../recipe.service"


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  private recipeIndex;
  private subscription: Subscription ;



  constructor(private sls: ShoppingListService,
              private router : Router,
              private route : ActivatedRoute,
              private recipeService: RecipeService

  ) { }

  ngOnInit(){
    this.subscription = this.route.params.subscribe(
      (params: any ) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    );

  }

  OnAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);

  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);

    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
}
}
