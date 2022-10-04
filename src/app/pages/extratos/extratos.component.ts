import { ExtratoService } from './../../services/extrato.service';
import { IExtrato } from './../../interfaces/extrato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extratos',
  templateUrl: './extratos.component.html',
  styleUrls: ['./extratos.component.css']
})
export class ExtratosComponent implements OnInit {

  constructor(private extratoService: ExtratoService) { }
  extratos: IExtrato[] = [];
  ngOnInit(): void {
    this.buscarTodosExtratos();
  }

  buscarTodosExtratos() {
    this.extratoService.listarTodosExtratos().subscribe((extratos: IExtrato[]) => {
      this.extratos = extratos;
    });
  }

}
