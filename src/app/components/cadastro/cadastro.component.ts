import { ICliente } from './../../interfaces/cliente';
import { ClientesService } from './../../services/clientes.service';
import { ContasService } from 'src/app/services/contas.service';
import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { IConta } from 'src/app/interfaces/conta';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
  private contasService: ContasService,
  private route: ActivatedRoute,
  private alertaService: AlertasService,
  private router: Router,
  private clientesService: ClientesService
  ) { }

  idConta = 0;

  contaForm = new FormGroup({

    agencia: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl(0, Validators.required)
  });

  ngOnInit(): void {

    this.idConta = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idConta !==0){
      this.contasService.buscarContaPorId(this.idConta).subscribe((conta:IConta)=>{
        this.contaForm.setValue({
          agencia: conta.agencia,
          cpf:'' ,
          numero: conta.numero,
          saldo: conta.saldo
        });
      }, (error) => {
        console.error(error);
      });
    }
  }

  cadastrarConta() {
    const conta: IConta = this.contaForm.value as IConta;
    let cpf = String(this.contaForm.value.cpf);
    this.clientesService.buscarClientePorCpf(cpf).subscribe((cliente:ICliente) =>{
      conta.cliente=cliente;
    });

    if (this.idConta) {
      conta.id = this.idConta;
      this.contasService.atualizarConta(conta).subscribe(() => {
        this.alertaService.alertaSucesso('Conta editada com sucesso.');
        this.router.navigateByUrl('/contas');
      })
      return;
    }

    conta.saldo =0
    this.contasService.cadastrarConta(conta).subscribe(() => {
      this.alertaService.alertaSucesso('Conta Criada com sucesso!');
      this.router.navigateByUrl('/contas');
    }, (error)=> {
      console.error(error);
    });

}
}

