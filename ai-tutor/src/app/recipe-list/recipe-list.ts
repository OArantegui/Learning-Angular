import { Component, signal, computed, inject } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.html',
    styleUrl: './recipe-list.css',
    imports: [RecipeDetail, FormsModule]
})
export class RecipeList {
    // This component holds the "State"
    protected readonly recipeService = inject(RecipeService)
    protected readonly recipes = this.recipeService.getRecipes()
    protected readonly searchTerm = signal('')

    protected readonly filteredRecipes = computed(() => {
        const term = this.searchTerm().toLowerCase();
        return this.recipes().filter(r => r.name.toLowerCase().includes(term));
    })

}