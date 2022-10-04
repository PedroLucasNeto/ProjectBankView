import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}`);
  }
  cadastrarConta(conta: IConta) {
    return this.http.post(`${this.api}/${this.endpoint}`, conta);
  }

  atualizarConta(conta: IConta) {
    return this.http.put(`${this.api}/${this.endpoint}/${conta.id}`, conta);
  }

  buscarContaPorId(id: number) {
    return this.http.get<IConta>(`${this.api}/${this.endpoint}/${id}`);
  }

  buscarContaPorAgenciaConta(agencia: string, numero: string) {
    return this.http.get<IConta>(`${this.api}/${this.endpoint}consultarDados/${agencia}/${numero}`);
  }

  excluirContaPorId(id: number) {
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }

}
