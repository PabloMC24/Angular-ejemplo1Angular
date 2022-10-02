import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  {

  num1:number=0;
  resultado:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  resultMult():void{
    for(let i=1; i<11; ++i){
      this.resultado[i]=`${this.num1} x ${i} = ${i*this.num1}`+"\n";
    }
  }
}
