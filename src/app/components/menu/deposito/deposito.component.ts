import { AlertasService } from './../../../services/alertas.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from './../../../services/local-storage.service';
import { IConta } from './../../../interfaces/conta';
import { ContasService } from './../../../services/contas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css'],
})
export class DepositoComponent implements OnInit {
  constructor(
    private contasService: ContasService,
    private alertasService: AlertasService,
    private localStorage: LocalStorageService,
  ) {}

  agencia = '';
  numero = '';
  conta?: IConta;
  valor: number = 0;

  depositForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    valor: new FormControl(0, Validators.required),
  });

  ngOnInit(): void {
    this.agencia = this.localStorage.get('agencia')
    this.numero = this.localStorage.get('numero')
    if (this.conta?.agencia !== null) {
      this.contasService.buscarContaPorAgenciaConta(this.agencia, this.numero).subscribe(
          (conta: IConta) => {
            this.depositForm.setValue({
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

  depositar() {
    const conta: IConta = this.depositForm.value as IConta;
    let valor =Number(this.depositForm.value.valor);
    this.contasService.realizarDeposito(conta, valor).subscribe(() => {
    this.alertasService.alertaSucesso('Deposito realizado com sucesso!');
    });
  }
}
