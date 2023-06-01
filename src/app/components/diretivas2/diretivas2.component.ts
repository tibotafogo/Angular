import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas2',
  templateUrl: './diretivas2.component.html',
  styleUrls: ['./diretivas2.component.css']
})
export class Diretivas2Component {
public status: boolean= true
public lista = [
  'Sampaio Correia',
  'Bangu',
  'Madureira',
  'Maricá'
]
public lista2 = [
  "Icarly",
  "Simona",
  "Ventino",
  "The L word"
]


public on: boolean = false
public off: boolean = true

clica() : void{
  this.on= true
}

}
