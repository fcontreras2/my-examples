import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoFoundComponent } from './shared/no-found/no-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
