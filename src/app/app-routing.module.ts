import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TabelasComponent } from './pages/tabelas/tabelas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tabelas', component: TabelasComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }