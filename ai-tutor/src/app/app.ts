import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Add it to imports
  template: '<router-outlet />',     // Use it in the template
  styleUrl: './app.css',
})
export class App { }