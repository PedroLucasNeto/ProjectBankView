import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { AlertasService } from 'src/app/services/alertas.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService, private alertasService: AlertasService) { }
  clientes: ICliente[] = [];

  ngOnInit(): void {
    this.buscarTodosClientes();
  }

  buscarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe((clientes: ICliente[]) => {
      this.clientes = clientes;
    });
  }

  excluir(id?: number) {
    if (id) {
      this.clienteService.excluirClientePorId(id).subscribe(() => {
        this.alertasService.alertaSucesso('Cliente removido com sucesso!');
        this.buscarTodosClientes();
      }, (error) => {
        console.error(error);
      })
      return;
    }
}
}
