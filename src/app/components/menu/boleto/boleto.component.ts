import { LocalStorageService } from './../../../services/local-storage.service';
import { IConta } from 'src/app/interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']
})
export class BoletoComponent implements OnInit {

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
        }, (error) => {
          console.error(error);
        });
      }
    }

}
