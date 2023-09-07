import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];
  instrutores: string[];
  curso: { id: number; nome: string; instrutor: string }[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://www.cursoangular.com.br';
    this.cursos = cursosService.getCursos();
    this.instrutores = cursosService.getInstrutores();
    this.curso = cursosService.getCurso();
  }
}
