import {Ingredient} from "../recipes/ingredient"
export class ShoppingListService {
  private items: Ingredient[]= [];
  constructor() { }
    getItems(){
    return this.items;
    }

    addItems(items: Ingredient[]) {
      Array.prototype.push.apply(this.items, items);

    }

    addItem(item: Ingredient){
      this.items.push(item);
    }

    editItem(olditem: Ingredient, newItem: Ingredient){
      this.items[this.items.indexOf(olditem)]= newItem;
    }

    deleteItem(oldItem: Ingredient){
      this.items.splice(this.items.indexOf(oldItem),1);

    }

}
