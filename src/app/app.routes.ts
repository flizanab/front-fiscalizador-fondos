import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EjecutoresComponent } from './ejecutores/ejecutores.component';
import { ControlFondosComponent } from './control-fondos/control-fondos.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ejecutores', component: EjecutoresComponent},
  {path: 'usuario', component: UsuariosComponent},
  {path: 'control', component: ControlFondosComponent},
  { path: 'usuario/:institucionId', component: FormularioComponent }
];
