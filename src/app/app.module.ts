import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabelasComponent } from './pages/tabelas/tabelas.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { TabelaCPFComponent } from './pages/tabela-cpf/tabela-cpf.component';
import { FormsModule } from '@angular/forms';
import { FormataTelefonesPipe } from './pipes/formata-telefones.pipe';
import { FormataCpfPipe } from './pipes/formata-cpf.pipe';
import { ListaComponent } from './pages/lista/lista.component';
import { LoginComponent } from './pages/login/login.component';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TabelasComponent,
    HomeComponent,
    FormularioComponent,
    TabelaCPFComponent,
    FormataTelefonesPipe,
    FormataCpfPipe,
    ListaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL',}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
