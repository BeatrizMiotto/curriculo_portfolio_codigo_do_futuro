import {Produtos} from "../models/produtos";

export class ProdutoService{

  private static produtos: Produtos[] = [{
    id: 1,
    nome: "Uva",
    descricao: "Uva verde",
    preco: 10.50
  }]

  public static buscaProdutosPorId(id: Number): Produtos {
    let produto:Produtos = {} as Produtos
    for(let i=0; i<ProdutoService.produtos.length; i++){
      let produtoDb = ProdutoService.produtos[i];
      if(produtoDb.id == id){
        produto = produtoDb
        break
      }
    }
    return produto;
  }


  public static buscaProdutos():Produtos[]{
    return ProdutoService.produtos;
  }
  public static adicionaProduto(produto:Produtos):void{
    produto.id = ProdutoService.buscaProdutos().length + 1
    ProdutoService.produtos.push(produto)
 
  }
  public static alteraProduto(produto:Produtos):void{
    for(let i=0; i<ProdutoService.produtos.length; i++){
      let produtoDb = ProdutoService.produtos[i];
      if(produtoDb.id == produto.id){
        produtoDb = {
          ...produto
        }
        break
      }
    }
  }
  public static deletaProduto(produto:Produtos):void{
    let newList = []
    for(let i=0; i<ProdutoService.produtos.length; i++){
      let produtoDb = ProdutoService.produtos[i];
      if(produtoDb.id != produto.id){
        newList.push(produtoDb)
      }
    }
    ProdutoService.produtos = newList
  }
}