import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  btnCadastro = true; 

  clientes: Cliente[]=[]
  cliente = new Cliente();

  tabela: boolean = true;

  constructor(private servico: ClienteService, private router: Router){}

  ngOnInit(): void {
      this.selecionar();
  }

  selecionar():void{
    this.servico.selecionar().subscribe((clientes)=>{
      this.clientes = clientes;
    })
  }

  cadastrar():void{
    this.servico.cadastrar(this.cliente).subscribe((retorno)=>{
      this.clientes.push(retorno);

      this.cliente = new Cliente();
      alert('Cliente castrado com sucesso!')
    })
  }

  editar():void{
    this.servico.editar(this.cliente).subscribe((retorno)=>{
      this.clientes.push(retorno);
      let posicao = this.clientes.findIndex((obj)=>{
        return obj.codigo == retorno.codigo;
      });

      this.clientes[posicao] = retorno;

      this.tabela = true;
      this.btnCadastro = true;
      this.cliente = new Cliente();
      alert('Cliente editado com sucesso!')
    })
  }

  remover():void{
    this.servico.remover(this.cliente.codigo).subscribe((retorno)=>{

      let posicao = this.clientes.findIndex((obj)=>{
        return obj.codigo == this.cliente.codigo;
      });

      this.clientes.splice(posicao, 1);

      this.tabela = true;
      this.btnCadastro = true;
      this.cliente = new Cliente();
      alert('Cliente removido com sucesso!')
    })
  }
  

  aoClicarSelecionar(posicao: number){
    this.cliente = this.clientes[posicao];
    this.btnCadastro = false;
    this.tabela = false;
  }

  goToHome() {
    this.router.navigate(['/detalhar']);
  }

  aoClicarCancelar(){
    this.cliente = new Cliente();
    this.btnCadastro = true;
    this.tabela = true;
  }
}
