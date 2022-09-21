import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1Angular';

  pelicula={
    titulo:'SpiderMan',
    fechalanzamiento:new Date(),
    precio: 235.76,

  };

  diplicarValor(x:number):number{
    return x*2;
  }
}


