import { Component, OnInit } from '@angular/core';
import {Li} from '../moduls/nav';
import {Iconos} from '../moduls/nav';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {
  public logo :string;
  public logoNombre :string;
  public navegador : Array<Li>;
  public incono : Array<Iconos>;

  constructor() {

    this.logo ="https://zapatospasse.com/wp-content/uploads/2018/09/logo-passe-310x200.png";
    this.logoNombre ="logo"

    this.navegador = [
      new Li ("MUJER","LINK"),
      new Li ("HOMBRE","LINK"),
      new Li ("OUTLET","LINK"),
      new Li ("BLOG","LINK"),
      new Li ("CONTACTAR","LINK"),
      new Li ("CONOCENOS","LINK")
    ];

    this.incono =[
      new Iconos("user-alt","link"),
      new Iconos ("shopping-bag","link"),
      new Iconos ("search","link")
    ];

    

  }

  ngOnInit() {
  }

}
