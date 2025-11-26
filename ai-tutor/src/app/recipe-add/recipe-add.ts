import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-add',
    styleUrl: './recipe-add.css',
    imports: [ReactiveFormsModule],
    templateUrl: './recipe-add.html'
})
export class RecipeAdd {
    private readonly recipeService = inject(RecipeService)
    private readonly formBuilder = inject(FormBuilder)
    private readonly form = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
    })
    onSubmit() {
        if (this.form.valid) {
            this.recipeService.addRecipe(this.form.value)
        }
    }
}