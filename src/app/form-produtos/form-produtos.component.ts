import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = 'Formulário de Produtos';
  produto = "Produto 2";

  constructor() { }

  ngOnInit() {
  }

  


  // capturaInput(evento){
  //   this.produto = evento.target.value;    
  // }

}
