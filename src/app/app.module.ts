import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



import { CursosModule} from './cursos/cursos.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosService } from './cursos/cursos/cursos.service';
import { DataBindingComponent } from './data-binding/data-binding.component';









@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule

  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
