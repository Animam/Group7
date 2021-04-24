import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourTitlePageRoutingModule } from './cour-title-routing.module';

import { CourTitlePage } from './cour-title.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourTitlePageRoutingModule
  ],
  declarations: [CourTitlePage]
})
export class CourTitlePageModule {}
