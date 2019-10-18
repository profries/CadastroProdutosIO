import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = 'Formulário de Produtos';
  produto = new Produto();
  @Output() salvar = new EventEmitter<Produto>(); 


  constructor() { }

  ngOnInit() {
  }

  salvarProduto(){
    this.salvar.emit(this.produto);
    this.produto = new Produto();
  }



}
