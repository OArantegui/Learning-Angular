import { Component, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.html',
    styleUrl: './recipe-list.css',
    imports: [RecipeDetail, FormsModule]
})
export class RecipeList {
    // This component holds the "State"
    protected readonly recipes = signal<RecipeModel[]>(MOCK_RECIPES)
    protected readonly searchTerm = signal('')

    protected readonly filteredRecipes = computed(() => {
        const term = this.searchTerm().toLowerCase();
        return this.recipes().filter(r => r.name.toLowerCase().includes(term));
    })

}