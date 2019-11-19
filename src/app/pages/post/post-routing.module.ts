import { RouterModule, Routes } from '@angular/router';

import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    data: { title: 'Post' }
  },
  {
    path: 'post/details/:id',
    component: PostDetailsComponent,
    data: { title: 'Post Details' }
  },
  {
    path: 'post/add',
    component: PostAddComponent,
    data: { title: 'Post Add' }
  },
  {
    path: 'post/edit/:id',
    component: PostEditComponent,
    data: { title: 'Post Edit' }
  }
];

export const PostRoutingModule = RouterModule.forChild(routes);
