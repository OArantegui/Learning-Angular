/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { Routes } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipes',
        pathMatch: 'full'

    },
    {
        path: '',
        component: RecipeList
    }
];
