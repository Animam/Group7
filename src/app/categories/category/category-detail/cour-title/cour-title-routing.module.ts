import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourTitlePage } from './cour-title.page';

const routes: Routes = [
  {
    path: '',
    component: CourTitlePage
  },
  {
    path: ':chapterId',
    loadChildren: () => import('./chapter-detail/chapter-detail.module').then( m => m.ChapterDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourTitlePageRoutingModule {}
