import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  public status: boolean= true
public lista = [
  'Lady Gaga',
  "Britney Spears",
  'Sabrina Carpenter',
  "Twin Melody"
  ]
  public lista2 = [
    'Rio de Janeiro',
    'São Paulo',
    'Sergipe',
    'Acre'
  ]
  
 public on : boolean = false
 public off: boolean = true  

 clica() : void{
  this.on= true

 }

}
