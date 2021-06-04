import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { EdituserComponent } from './pages/edituser/edituser.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
  },

  {
    path: 'users/:page',
    component: UsersComponent,
  },

  {
    path: 'user/:id',
    component: EdituserComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
