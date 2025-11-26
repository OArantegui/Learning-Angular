import { RecipeModel } from "./models";
import { MOCK_RECIPES } from "./mock-recipes";
import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RecipeService {
    private readonly recipes = signal<RecipeModel[]>(MOCK_RECIPES);
    public getRecipes() {
        return this.recipes;
    }
    addRecipe(newRecipe: Omit<RecipeModel, 'id'>) {
        this.recipes.update(currentRecipes => [
            ...currentRecipes,
            {
                ...newRecipe,
                id: Date.now(),
            }
        ]);
    }
}



