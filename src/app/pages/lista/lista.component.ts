import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos';
import { ProdutoService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public produtos: Produtos[] = ProdutoService.buscaProdutos()

  add(){
    this.router.navigateByUrl("/formulario")

  }
  deletar(produto:Produtos){
    ProdutoService.deletaProduto(produto)
    this.produtos = ProdutoService.buscaProdutos()

  }


}
