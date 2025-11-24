import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list'; // Import the new component

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeList], // Add it to imports
  template: '<app-recipe-list />',     // Use it in the template
  styleUrl: './app.css',
})
export class App { }