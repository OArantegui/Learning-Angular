import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router'; // Import Router to handle redirection

@Component({
    selector: 'app-recipe-add',
    styleUrl: './recipe-add.css',
    imports: [ReactiveFormsModule],
    templateUrl: './recipe-add.html'
})
export class RecipeAdd {
    private readonly recipeService = inject(RecipeService);
    private readonly formBuilder = inject(FormBuilder);
    private readonly router = inject(Router); // Inject Router

    // CHANGE 'private' TO 'protected' HERE:
    protected readonly form = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
    });

    onSubmit() {
        if (this.form.valid) {
            // We need to cast the value because form values can be null/undefined
            const newRecipe = {
                name: this.form.value.name!,
                description: this.form.value.description!,
                image: this.form.value.image!,
                ingredients: [], // Initialize with empty ingredients for now
                isFavourite: false
            };

            this.recipeService.addRecipe(newRecipe);
            this.router.navigate(['/recipes']); // Redirect back to list
        }
    }
}