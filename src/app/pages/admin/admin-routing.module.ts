import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    data: { title: 'Blog Admin' }
  },
];

export const AdminRoutingModule = RouterModule.forChild(routes);
