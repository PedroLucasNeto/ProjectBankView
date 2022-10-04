import { ContasService } from './../../services/contas.service';
import { AlertasService } from './../../services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import {IConta} from '../../interfaces/conta'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(

  private route: ActivatedRoute,
  private alertasService: AlertasService,
  private router: Router,
  private contasService: ContasService
  ) { }
  agencia = ''
  numero = ''
  contas: IConta[] = [];

  loginForm = new FormGroup({

    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
  });


  ngOnInit(): void {
    this.agencia = String(this.route.snapshot.paramMap.get('agencia'));
    this.numero = String(this.route.snapshot.paramMap.get('numero'));
    if (this.agencia && this.numero !==null ){
      this.contasService.buscarContaPorAgenciaConta(this.agencia, this.numero).subscribe((conta:IConta)=>{
        this.loginForm.setValue({
          agencia: conta.agencia,
          numero: conta.numero,
        });
      }, (error) => {
        console.error(error);
      });
    }
  }



  logar(agencia?: string, numero?:string) {
    if (agencia && numero) {
      this.contasService.buscarContaPorAgenciaConta(agencia,numero).subscribe(() => {
        this.alertasService.alertaLogado('Logado com sucesso!');
      }, (error) => {
        console.error(error);
      })
      return;
    }
}

buscarTodasContas() {
  this.contasService.listarTodasContas().subscribe((contas: IConta[]) => {
    this.contas = contas;
  });
}

}
