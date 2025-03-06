import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "src/app/modelo/Cliente";
import { ClienteService } from "src/app/servico/cliente.service";

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent  implements OnInit {
  titulo: string = 'Página Principal';

    clientes: Cliente[]=[]
    cliente!: Cliente;

  constructor(private servico: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.cliente = this.servico.consultarClienteSelecionadoar();
    this.carregarDados();
  }
  
  carregarDados(): void {
    console.log(this.cliente);
    this.servico.selecionar().subscribe((clientes)=>{
      this.clientes = clientes;
    })
  }

  voltar() {
    this.router.navigate(['/principal']);
  }

  teste(entrada: Event){
    console.log('-------->', entrada);
  }
}