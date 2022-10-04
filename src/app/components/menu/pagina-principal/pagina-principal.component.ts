import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { IConta } from './../../../interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private contasService: ContasService, private http: HttpClient) { }
  contas: IConta[] = [];
  agencia = ''
  numero = ''
  conta?: IConta ;
  ngOnInit(): void {
    this.buscarTodasContas();
  }


  buscarTodasContas() {
    this.contasService.listarTodasContas().subscribe((contas: IConta[]) => {
      this.contas = contas;
    });
  }

  buscarUma() {
    this.contasService.buscarContaPorAgenciaConta(this.agencia,this.numero ).subscribe((conta: IConta) => {
      this.conta = conta;
    });
  }

}
