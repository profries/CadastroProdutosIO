import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Tabela de Produtos";

  produtos = [
    {id:1,nome:"Produto 1",preco:100.00},
    {id:2,nome:"Produto 2",preco:200.00},
    {id:3,nome:"Produto 3",preco:300.00},
    {id:4,nome:"Produto 4",preco:400.00},
    {id:5,nome:"Produto 5",preco:500.00},
    {id:6,nome:"Produto 6",preco:600.00},
  ]


  constructor() { }

  ngOnInit() {
  }

}
