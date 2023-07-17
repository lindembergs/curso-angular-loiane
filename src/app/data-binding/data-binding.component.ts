import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
   valorAtual: any = '' ;

   valorSalvo: any = '' ;

   mouse: boolean = false;

   nome: string = 'abc' ;





  botaoClicado(){
    return alert('evento com sucesso')
  }

  salvarValor(valor: string){
    this.valorSalvo = valor ;
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




  constructor(){


  }

}
