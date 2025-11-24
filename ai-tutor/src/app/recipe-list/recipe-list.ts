import { Component, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.html',
    styles: ``,
    imports: [RecipeDetail]
})
export class RecipeList {
    // This component holds the "State"
    protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

    protected toggleRecipe(): void {
        this.recipe.update(current =>
            current.id === MOCK_RECIPES[0].id ? MOCK_RECIPES[1] : MOCK_RECIPES[0]
        );
    }
}