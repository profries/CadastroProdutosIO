import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = 'Formulário de Produtos';
  produto = {id:'',nome:'',preco:''};
  produtos= [];

  constructor() { }

  ngOnInit() {
  }

  salvarProduto(){
    this.produtos.push(this.produto);
    this.produto = {id:'',nome:'',preco:''};

  }



  // capturaInput(evento){
  //   this.produto = evento.target.value;    
  // }
}
