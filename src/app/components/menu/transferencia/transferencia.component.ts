import { ITransferencia } from './../../../interfaces/transferencia';
import { AlertasService } from './../../../services/alertas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from './../../../services/local-storage.service';
import { ContasService } from 'src/app/services/contas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(
    private contasService: ContasService,
    private localStorage: LocalStorageService,
    private alertasService: AlertasService
    ) { }

    agencia = ''
    numero = ''

    transForm = new FormGroup({
      agenciaOrigem: new FormControl('', Validators.required),
      numeroOrigem: new FormControl('', Validators.required),
      agenciaDestino: new FormControl('', Validators.required),
      numeroDestino: new FormControl('', Validators.required),
      valor: new FormControl(0, Validators.required),
    });

    ngOnInit(): void {

      this.agencia = this.localStorage.get('agencia')
      this.numero = this.localStorage.get('numero')

      this.transForm.setValue({
        agenciaOrigem: this.agencia,
        numeroOrigem: this.numero,
        agenciaDestino:'',
        numeroDestino: '',
        valor: 0 });
      }
        // if (this.agencia && this.numero){
      //   this.contasService.buscarContaPorAgenciaConta(this.agencia, this.numero).subscribe((conta: IConta) => {
      //       this.transForm.setValue({
      //         agenciaOrigem: conta.agencia,
      //         numeroOrigem: conta.numero,
      //         agenciaDestino:'',
      //         numeroDestino: '',
      //         valor: 0
      //       });
      //     },
      //     (error) => {
      //       console.error(error);
      //     }
      //   );
      // }


    transferir() {
      console.log(this.transForm);

      const transferencia: ITransferencia = this.transForm.value as ITransferencia;
      this.contasService.realizarTransferencia(transferencia).subscribe(() => {
        this.alertasService.alertaSucesso('Transferência realizado com sucesso');
      });
    }
  }
