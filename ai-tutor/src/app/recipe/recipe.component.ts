import { Component, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
    selector: 'app-recipe',
    template: `
    <h1>{{title().name}}</h1>
    <img [src]="title().image" [alt]="title().name" width="300">
    <p>{{title().description}}</p>
    <p>Ingredients: {{ingredientsCount()}}</p>
    <button type="button" (click)="ToggleRecipe()">Add Recipe</button>
  `,
    styles: ``
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
