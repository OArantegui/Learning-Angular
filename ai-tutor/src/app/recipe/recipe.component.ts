import { Component, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
    selector: 'app-recipe',
    template: `
    <app-recipe-detail [recipe]="title()"></app-recipe-detail>
  `,
    styles: ``,
    imports: [RecipeDetail]
})
export class RecipeComponent {
    protected readonly title = signal<RecipeModel>(MOCK_RECIPES[0]);

    protected ToggleRecipe(): void {
        if (this.title() === MOCK_RECIPES[0]) {
            this.title.update((recipe) => (recipe = MOCK_RECIPES[1]));
        } else {
            this.title.update((recipe) => (recipe = MOCK_RECIPES[0]));
        }
    }

    protected readonly ingredientsCount = computed(() => this.title().ingredients.length);
}
