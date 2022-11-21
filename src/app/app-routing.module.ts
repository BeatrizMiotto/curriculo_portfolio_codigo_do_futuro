import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { TabelaCPFComponent } from './pages/tabela-cpf/tabela-cpf.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tabelas', component: TabelasComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'tabela-cpf', component: TabelaCPFComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }