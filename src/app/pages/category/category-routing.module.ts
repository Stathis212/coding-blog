import { RouterModule, Routes } from '@angular/router';

import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    data: { title: 'Category' }
  },
  {
    path: 'details/:id',
    component: CategoryDetailsComponent,
    data: { title: 'Category Details' }
  },
  {
    path: 'add',
    component: CategoryAddComponent,
    data: { title: 'Category Add' }
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent,
    data: { title: 'Category Edit' }
  },
];

export const CategoryRoutingModule = RouterModule.forChild(routes);
