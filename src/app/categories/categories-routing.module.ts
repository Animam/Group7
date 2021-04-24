import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesPage,
    children:[
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path:'',
        redirectTo:'/categories/categories/category',
        pathMatch:'full'
      },
      {
        path: 'note',
        loadChildren: () => import('./note/note.module').then( m => m.NotePageModule)
      },
    ]
  },
  {
    path:'',
    redirectTo:'/categories/categories/category',
    pathMatch:'full'
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
