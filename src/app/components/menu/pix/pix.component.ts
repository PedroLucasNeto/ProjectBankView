import { LocalStorageService } from './../../../services/local-storage.service';
import { IConta } from 'src/app/interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css'],
})
export class PixComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private contasService: ContasService,
    private localStorage: LocalStorageService
  ) {}

  agencia = '';
  numero = '';
  conta?: IConta;

  ngOnInit(): void {
    this.agencia = this.localStorage.get('agencia')
    this.numero = this.localStorage.get('numero')

    if (this.agencia && this.numero) {
      this.contasService
        .buscarContaPorAgenciaConta(this.agencia, this.numero)
        .subscribe(
          (contaParam: IConta) => {
            this.conta = contaParam;
            console.log('chegou aqui');
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
}
