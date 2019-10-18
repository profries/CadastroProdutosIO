import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-produtos';
  listaProdutos: Produto[] = [
    {id:1,nome:"Produto 1",preco:100.00},
    {id:2,nome:"Produto 2",preco:200.00},
    {id:3,nome:"Produto 3",preco:300.00},
    {id:4,nome:"Produto 4",preco:400.00},
    {id:5,nome:"Produto 5",preco:500.00},
    {id:6,nome:"Produto 6",preco:600.00},
  ];

  addProduto(produto:Produto){
    this.listaProdutos.push(produto);
  }

 
}
