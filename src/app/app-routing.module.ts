import { CadastroComponent } from './components/cadastro/cadastro.component';
import { BoletoComponent } from './components/menu/boleto/boleto.component';
import { PixComponent } from './components/menu/pix/pix.component';
import { PaginaPrincipalComponent } from './components/menu/pagina-principal/pagina-principal.component';
import { TransferenciaComponent } from './components/menu/transferencia/transferencia.component';
import { SaqueComponent } from './components/menu/saque/saque.component';
import { DepositoComponent } from './components/menu/deposito/deposito.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEditarComponent } from './pages/clientes/cadastrar/cadastrar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasComponent } from './pages/contas/contas.component';
import { ExtratosComponent } from './pages/extratos/extratos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'contas', component: ContasComponent
  },
  {
    path: 'clientes/editar/:id', component: CadastrarEditarComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'menu/deposito', component: DepositoComponent
  },
  {
    path: 'menu/saque', component: SaqueComponent
  },
  {
  path: 'menu/transferencia', component: TransferenciaComponent
  },
  {
  path: 'pages/extratos', component: ExtratosComponent
  },
  {
    path: 'menu/pagina-principal', component: PaginaPrincipalComponent
  },
  {
    path: 'menu/pix', component: PixComponent
  },
  {
    path: 'menu/boleto', component: BoletoComponent
  },
  {
    path: 'login/conta/cadastro', component: CadastroComponent
  },
  {
    path: 'login/clientes/cadastrar', component: CadastrarEditarComponent
  },
  {
    path: 'contas/consultarDados/:agencia/:numero', component: PaginaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
