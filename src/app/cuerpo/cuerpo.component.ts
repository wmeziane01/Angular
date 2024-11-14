import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;
Multiplicar() {
this.resultado=this.numero1*this.numero2;
}
Dividir() {
this.resultado=this.numero1/this.numero2;
}
Restar() {
this.resultado=this.numero1-this.numero2;
}
Sumar() {
this.resultado=this.numero1+this.numero2;
}

}
