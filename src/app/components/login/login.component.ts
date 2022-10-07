import { AlertasService } from 'src/app/services/alertas.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { ContasService } from 'src/app/services/contas.service';

import { Router } from '@angular/router';
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
  private contasService: ContasService,
  private localStorage: LocalStorageService,
  private alertasService: AlertasService
  ) { }

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

    if(conta){
      this.agencia = conta.agencia
      this.numero = conta.numero
      this.contasService.logar(this.agencia, this.numero);
      this.localStorage.set('agencia', this.agencia)
      this.localStorage.set('numero', this.numero)
      this.alertasService.alertaLogado('Usuário autenticado.')
  }
}
}
