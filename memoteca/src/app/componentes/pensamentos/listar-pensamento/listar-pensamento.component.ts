import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Luiz Hakan',
      modelo: 'modelo3',
    },{
      conteudo: 'I love Java',
      autoria: 'Luiz Hakan',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos vitae earum quasi aspernatur voluptatum necessitatibus sequi aut temporibus, maxime praesentium possimus in repellat harum provident tempore voluptates quod ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos vitae earum quasi aspernatur voluptatum necessitatibus sequi aut temporibus, maxime praesentium possimus in repellat harum provident tempore voluptates quod ipsam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos vitae earum quasi aspernatur voluptatum necessitatibus sequi aut temporibus, maxime praesentium possimus in repellat harum provident tempore voluptates quod ipsam',
      autoria: 'Luiz Hakan',
      modelo: 'modelo2',
    }
  ];

  constructor() {}

  // nessa função, eu quero que crie um link para a rota criarPensamento
  // linkCriarPensamento(e: Event) {
  //   e.preventDefault();
  //   window.location.href = '/criarPensamento';
  // }

  ngOnInit(): void {}
}
