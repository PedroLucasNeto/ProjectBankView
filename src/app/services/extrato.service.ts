import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IExtrato } from 'src/app/interfaces/extrato'


@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  endpoint = 'operacaoConta/';
  api = environment.api;

  constructor(private http: HttpClient) { }
  listarTodosExtratos() {
    return this.http.get<IExtrato[]>(`${this.api}/${this.endpoint}`);
  }
}
