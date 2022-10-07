import { AlertasService } from './../../../services/alertas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from './../../../services/local-storage.service';
import { ContasService } from 'src/app/services/contas.service';
import { IConta } from 'src/app/interfaces/conta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  constructor(
    private contasService: ContasService,
    private localStorage: LocalStorageService,
    private alertasService: AlertasService
    ) { }

    agencia = ''
    numero = ''
    conta?: IConta;
    valor: number = 0;

    saqueForm = new FormGroup({
      agencia: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      valor: new FormControl(0, Validators.required),
    });

    ngOnInit(): void {

      this.agencia = this.localStorage.get('agencia')
      this.numero = this.localStorage.get('numero')
      if (this.agencia && this.numero){
        this.contasService.buscarContaPorAgenciaConta(this.agencia, this.numero).subscribe(
          (conta: IConta) => {
            this.saqueForm.setValue({
              agencia: conta.agencia,
              numero: conta.numero,
              valor: 0
            });
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }

    sacar() {
      const conta: IConta = this.saqueForm.value as IConta;
      let valor =Number(this.saqueForm.value.valor);
      this.contasService.realizarSaque(conta, valor).subscribe(() => {
      this.alertasService.alertaSucesso('Saque realizado com sucesso');
      });
    }
  }
