import { Component } from '@angular/core';
import { CursosService } from './cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;

  cursos: string[];

  constructor(private CursosService: CursosService) {
    this.nomePortal = 'http://www.google.com';

    this.cursos = this.CursosService.getCursos();

  }
}
