import { Routes } from '@angular/router';

// Pages
import { CompositeComponent } from './composite/composite.component';
import { ModifyComponent } from './modify/modify.component';
import { ModifyPasswordComponent } from './modify_password/modify_password.component';
import { ModifyRoleComponent } from './modify_role/modify_role.component';
import { ViewComponent } from './view/view.component';
import { AuthGuard } from 'src/app/services/authentication.service';

export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CompositeComponent,
      },
      {
        path: 'composite',
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
        component: CompositeComponent,
      },
      {
        path: 'modify',
        component: ModifyComponent,
      },
      {
        path: 'modify_password',
        component: ModifyPasswordComponent,
      },
      {
        path: 'modify_role',
        canActivate: [AuthGuard],
        data: { roles: ['admin'] },
        component: ModifyRoleComponent,
      },
      {
        path: 'view',
        component: ViewComponent,
      },
    ],
  },
];
