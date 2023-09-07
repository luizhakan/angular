import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  getCursos() {
    return ['Java', 'EXT JS', 'Angular', 'Spring Boot'];
  }

  getInstrutores() {
    return ['Luiz Hakan', 'Augusto Dias', 'João Victor'];
  }

  getCurso() {
    return [
      {
        id: 1,
        nome: 'Java',
        instrutor: 'Luiz Hakan',
      },
      {
        id: 2,
        nome: 'TypeScript',
        instrutor: 'Augusto Dias',
      },
      {
        id: 3,
        nome: 'Angular',
        instrutor: 'João Victor',
      },
    ];
  }
}
