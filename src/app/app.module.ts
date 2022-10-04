import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastrarEditarComponent } from './pages/clientes/cadastrar/cadastrar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MenuComponent } from './components/menu/menu.component';
import { DepositoComponent } from './components/menu/deposito/deposito.component';
import { SaqueComponent } from './components/menu/saque/saque.component';
import { TransferenciaComponent } from './components/menu/transferencia/transferencia.component';
import { PaginaPrincipalComponent } from './components/menu/pagina-principal/pagina-principal.component';
import { PixComponent } from './components/menu/pix/pix.component';
import { BoletoComponent } from './components/menu/boleto/boleto.component';
import { ExtratosComponent } from './pages/extratos/extratos.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    HeaderComponent,
    ContasComponent,
    CadastrarEditarComponent,
    BannerComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    MenuComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    PaginaPrincipalComponent,
    PixComponent,
    BoletoComponent,
    ExtratosComponent,
    CadastrarEditarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
