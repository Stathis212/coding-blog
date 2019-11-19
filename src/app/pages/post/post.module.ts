import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    PostDetailsComponent,
    PostAddComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
