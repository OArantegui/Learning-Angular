import { Component, input, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.html',
    styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
    // 1. The INPUT: Receives data from the parent
    readonly recipe = input.required<RecipeModel>();

    // 2. Internal State: Tracks servings (Catching up on Module 5)
    protected readonly servings = signal(1);

    // 3. Computed Logic: Adjusts ingredients based on servings (Catching up on Module 6)
    protected readonly adjustedIngredients = computed(() => {
        const currentRecipe = this.recipe();
        const currentServings = this.servings();

        return currentRecipe.ingredients.map(ing => ({
            ...ing,
            quantity: ing.quantity * currentServings
        }));
    });

    protected increment(): void {
        this.servings.update(v => v + 1);
    }

    protected decrement(): void {
        this.servings.update(v => (v > 1 ? v - 1 : 1));
    }
}