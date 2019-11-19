import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
