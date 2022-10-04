import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IConta } from './../../../interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(

    private route: ActivatedRoute,
    private contasService: ContasService
    ) { }

    agencia = ''
    numero = ''
    conta?: IConta;

    ngOnInit(): void {

      this.agencia = String(this.route.snapshot.paramMap.get('agencia'));
      this.numero = String(this.route.snapshot.paramMap.get('numero'));
      console.log(this.agencia);
      console.log(this.numero);


      if (this.agencia && this.numero){
        this.contasService.buscarContaPorAgenciaConta(this.agencia, this.numero).subscribe((contaParam:IConta)=>{
          this.conta = contaParam;
          console.log(contaParam);

        }, (error) => {
          console.error(error);
        });
      }
    }

}
