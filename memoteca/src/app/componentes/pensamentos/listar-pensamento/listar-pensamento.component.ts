import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}
  paginaAtual = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);

        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }
}
