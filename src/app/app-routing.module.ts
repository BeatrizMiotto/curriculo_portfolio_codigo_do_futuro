import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { TabelaCPFComponent } from './pages/tabela-cpf/tabela-cpf.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tabelas', component: TabelasComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'tabela-cpf', component: TabelaCPFComponent},
  {path: 'lista', component: ListaComponent},
  {path: '/formu_alterar/:id', component: FormularioComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }