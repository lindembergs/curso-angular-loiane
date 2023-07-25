import { CommonModule } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
 crioMesmo:string='';
   valorAtual: any = '' ;

   valorSalvo: any = '' ;

   mouse: boolean = false;

   nome: string = '' ;

   liveReload: number = 1 ;





  botaoClicado(){
    return alert('evento com sucesso')
  }

  salvarValor(valor: string){
    this.valorSalvo = valor.toUpperCase;
  }

  onKeyUp(evento: KeyboardEvent){

     this.valorAtual = (<HTMLInputElement>evento.target).value ;

  }

onMouseOverOut(){
   this.mouse = !this.mouse
}

doisCaminhos(){
  this.nome = this.nome
}





constructor(private http: HttpClient) { }


}
