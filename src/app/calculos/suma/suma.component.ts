import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent  {
  
  
  total:number=0;
  numero1:string="";
  numero2:string="";
  

  opera:string="";
 
  constructor() { }

  sumar(){
    this.total= parseInt(this.numero1)+ parseInt(this.numero2);
  }

  operacion(){
    // while( this.opera == "sum" &&  this.opera == "res" && this.opera == "multi" && this.opera =="div"){
    //   switch(this.opera){
    //     case 1: this.total= parseInt(this.numero1)+ parseInt(this.numero2);
    //     break;
    //     case 2: this.total= parseInt(this.numero1)- parseInt(this.numero2);
    //     break;
    //     case 3: this.total= parseInt(this.numero1)* parseInt(this.numero2);
    //     break;
    //     case 4: this.total= parseInt(this.numero1)/ parseInt(this.numero2);
    //     break;
    //   }

        if (this.opera=="sum"){
          this.total= parseInt(this.numero1)+ parseInt(this.numero2);
        }

        if (this.opera=="resta"){
          this.total= parseInt(this.numero1)- parseInt(this.numero2);
        }

        if (this.opera=="multi"){
          this.total= parseInt(this.numero1)* parseInt(this.numero2);
        }
        
        if (this.opera=="divi"){
          this.total= parseInt(this.numero1)/ parseInt(this.numero2);
        }

      }
  }




