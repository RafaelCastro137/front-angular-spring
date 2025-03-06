import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DetalharComponent } from './principal/detalhar/detalhar.component';


const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' }, // Rota padrão
  { path: 'principal', component: PrincipalComponent },
  { path: 'principal/detalhar', component: DetalharComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
