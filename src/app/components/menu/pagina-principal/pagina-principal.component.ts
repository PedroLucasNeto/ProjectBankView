import { LocalStorageService } from './../../../services/local-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IConta } from './../../../interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {


  constructor(

    private contasService: ContasService,
    private localStorage: LocalStorageService
    ) { }

    agencia = ''
    numero = ''
    conta?: IConta;

    ngOnInit(): void {
      this.agencia = this.localStorage.get('agencia')
      this.numero = this.localStorage.get('numero')

      if (this.agencia && this.numero){
        this.contasService.buscarContaPorAgenciaConta(this.agencia, this.numero).subscribe((contaParam:IConta)=>{
        this.conta = contaParam;
        console.log(this.conta);


        }, (error) => {
          console.error(error);
        });
      }
    }

}
