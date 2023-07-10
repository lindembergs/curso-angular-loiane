import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string;

  verdadeiro: boolean = false;

  False(){
    return false;
  }

  constructor(){
    this.url = 'www.facebook.com'
  }

}
