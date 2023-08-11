import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor() {}

  // nessa função, eu quero que crie um link para a rota criarPensamento
  // linkCriarPensamento(e: Event) {
  //   e.preventDefault();
  //   window.location.href = '/criarPensamento';
  // }

  ngOnInit(): void {}
}
