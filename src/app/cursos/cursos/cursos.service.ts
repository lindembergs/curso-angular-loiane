import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return ['java', 'android', 'ios', 'react']
  }

  constructor() { }
}
