import { ICadastroConta } from './../interfaces/cadastro-conta';
import { ITransferencia } from './../interfaces/transferencia';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';


@Injectable({
  providedIn: 'root'
})
export class ContasService {

  endpoint = 'contas';
  api = environment.api;

  constructor(private http: HttpClient, private router: Router) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}`);
  }

  buscarContaPorId(id: number) {
    return this.http.get<IConta>(`${this.api}/${this.endpoint}/${id}`);
  }

  buscarContaPorAgenciaConta(agencia: string, numero: string) {
    return this.http.get<IConta>(`${this.api}/${this.endpoint}/consultarDados/${agencia}/${numero}`);
  }

  excluirContaPorId(id: number) {
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }

  logar(agencia:string, numero:string){
    if(agencia && numero){
      this.router.navigateByUrl(`contas/consultarDados/${agencia}/${numero}`);
    }
  }
  atualizarConta(conta: IConta) {
    return this.http.put(`${this.api}/${this.endpoint}/${conta.id}`, conta);
  }

  realizarDeposito(conta: IConta, valor:number){
    return this.http.put(`${this.api}/${this.endpoint}/depositoNaConta?agencia=${conta.agencia}&numero=${conta.numero}&valor=${valor}`,{})
  }


  realizarSaque(conta: IConta, valor:number){
    return this.http.put(`${this.api}/${this.endpoint}/saqueNaConta?agencia=${conta.agencia}&numero=${conta.numero}&valor=${valor}`,{})
  }

  realizarTransferencia(transferencia: ITransferencia){
    return this.http.put(`${this.api}/${this.endpoint}/transferencia`, transferencia)
  }

  cadastrarConta(cadastroConta: Partial<ICadastroConta>) {
    return this.http.post(`${this.api}/${this.endpoint}/criaConta`, cadastroConta);
  }


  // cadastrarConta(cadastroConta: ICadastroConta) {
  //   return this.http.post(`${this.api}/${this.endpoint}/criaContaParams?agencia=${cadastroConta.agencia}&numero=${cadastroConta.numero}&cpf=${cadastroConta.cpf}`, cadastroConta);
  // }

}
