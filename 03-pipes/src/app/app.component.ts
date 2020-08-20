import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Mari";
  nombre2 = "marIa De LOS angeleS";
  arreglo = [1,2,3,4,5,6,7,8];
  PI = Math.PI;
  a = 0.234 ;
  salario = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "primera",
      casa: "19"
    }
  }

  valorDePromesa = new Promise ((resolve,reject )=> {
    setTimeout( ()=> resolve ('Llego la data amigo!'), 3500 );
  });

  fecha = new Date();
  video = "tbneQDc2H3I";
}
