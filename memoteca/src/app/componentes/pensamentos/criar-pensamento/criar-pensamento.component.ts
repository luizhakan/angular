import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  // pensamento = {
  //   id: 1,
  //   conteudo: '',
  //   autoria: 'Luiz Hakan',
  //   modelo: '',
  // };

  pensamento = {
    conteudo: 'Insira aqui seu texto',
    autoria: 'Luiz Hakan',
    modelo: '1',
  }

  constructor() {}

  criarPensamento(e: Event) {
    e.preventDefault();

    this.pensamento.conteudo = this.pensamento.conteudo;
    this.pensamento.autoria = this.pensamento.autoria;
    this.pensamento.modelo = this.pensamento.modelo;

    alert(`'Pensamento criado no modelo ${this.pensamento.modelo}!'`);
  }

  // onPensamentoChange(e: Event) {
  //   e.preventDefault();
  //   const pensamento = (e.target as HTMLInputElement).value;

  //   this.pensamento.conteudo = pensamento;
  // }

  // onAutoriaChange(e: Event) {
  //   e.preventDefault();
  //   const autoria = (e.target as HTMLInputElement).value;

  //   this.pensamento.autoria = autoria;
  // }

  cancelarPensamento(e: Event) {
    e.preventDefault();
    alert('Pensamento cancelado!');
  }

  ngOnInit(): void {}
}