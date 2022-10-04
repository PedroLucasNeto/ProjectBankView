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

  contas: IConta[] = [];

  agencia = ''
  numero = ''

  loginForm = new FormGroup({

    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),

  });


  ngOnInit(): void {


  }

  logar(){
    const conta: IConta = this.loginForm.value as IConta;
    console.log(conta);
    if(conta){
      this.agencia = conta.agencia
      this.numero = conta.numero
      this.router.navigateByUrl(`/contas/consultarDados/${this.agencia}/${this.numero}`);
    }
  }

  buscarTodasContas() {
    this.contasService.listarTodasContas().subscribe((contas: IConta[]) => {
    this.contas = contas;
  });
}

}
