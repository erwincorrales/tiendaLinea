import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainTiendaComponent } from './main-tienda/main-tienda.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'tienda', component: MainTiendaComponent}
  // {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
