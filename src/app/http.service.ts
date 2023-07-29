import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_PATH = environment.API_PATH



  constructor( private HttpClient: HttpClient) {

  }


  obterTodos(): Observable<any> {
    return this.HttpClient.get(`${this.API_PATH}`)
    ;
  }
}


