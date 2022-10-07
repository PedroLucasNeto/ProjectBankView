import { Router } from '@angular/router';
import { ICadastroConta } from './../../interfaces/cadastro-conta';
import { ContasService } from 'src/app/services/contas.service';
import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/services/alertas.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
  private contasService: ContasService,
  private alertaService: AlertasService,
  private router: Router
  ) { }

  cadastroConta?: ICadastroConta;


  cadastroForm = new FormGroup({


    cpf: new FormControl('', Validators.required),
    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
  });


  ngOnInit(): void {

  }

  cadastrarConta() {

  let cadastroConta: ICadastroConta = this.cadastroForm.value as ICadastroConta;

  this.contasService.cadastrarConta(cadastroConta).subscribe(()=>{
    this.alertaService.alertaSucesso('Conta criada com sucesso.');
    this.limparFormulario();
    this.router.navigateByUrl('/menu/pagina-principal');
  }, (error) => {
    console.error(error);
});
}

 limparFormulario(){
  this.cadastroForm.setValue({
    cpf: '',
    agencia: '',
    numero: ''
  })
}

}

