import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos';
import { ProdutoService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private router:Router,
    private routerParams: ActivatedRoute){ }

  public produto:Produtos = {} as Produtos

  

  ngOnInit(): void {
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.produto = ProdutoService.buscaProdutosPorId(id)
    }
  }
  adicionaProduto(){
    if(this.produto.id > 0){
     ProdutoService.alteraProduto(this.produto)
    }else{
      let novoProduto: Produtos = {
        id: 0,
        nome: this.produto.nome,
        descricao: this.produto.descricao, 
        preco: this.produto.preco
      } as Produtos
      ProdutoService.adicionaProduto(novoProduto)
      this.router.navigateByUrl("/lista")
    }
    
  }
  delete(){
    
    


  }
  
  }


