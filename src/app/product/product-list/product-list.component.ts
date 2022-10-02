import { Component, OnInit } from '@angular/core';
import {IProducto } from '../producto'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagewidth:number=72;
  imageMarge:number=2;
  muestraImg:boolean=false;
  listFilter:string='';
  constructor() { }
  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }

  products:IProducto[]=[
    {
      "product1":1,
      "productName": 'Sentra',
      "description": 'auto familiar 4 puertas',
      'listFilter':'',
      "createDate": 'Mayo 21,++ 2011',
      "price":130000,
      "rating": 3.6,
      "imageUrl":""

    },
    
  ]
  ngOnInit(): void {
  }

}
