import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IConta } from './../../../interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(

    private route: ActivatedRoute,
    private alertasService: AlertasService,
    private router: Router,
    private contasService: ContasService
    ) { }

    contas: IConta[] = [];


    loginForm = new FormGroup({

      agencia: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
    });


    ngOnInit(): void {

    }

}
