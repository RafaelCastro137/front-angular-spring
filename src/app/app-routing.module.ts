import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DetalharComponent } from './detalhar/detalhar.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'detalhar', component: DetalharComponent },
  { path: '**', redirectTo: '/home' }  // Rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
