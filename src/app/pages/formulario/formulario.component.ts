import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  public produto:Produtos = {} as Produtos

  public produtos: Produtos[] =[
    {
      id: 1,
      nome: 'Batata',
      descricao:'Batata lavada',
      preco: 7.60
    },
    {
      id: 2,
      nome: 'Pão',
      descricao:'Pão de forma',
      preco: 6.50
    }
  ]

  ngOnInit(): void {
    //this.produto = this.produtos[0]
  }
  incluir(){
  let id = this.produtos.length + 1
  let novoProduto: Produtos ={
    id: id,
    nome: this.produto.nome,
    descricao: this.produto.descricao,
    preco: this.produto.preco

  } as Produtos 
  this.produtos.push(novoProduto)
  }
  delete(){
    


  }

}
