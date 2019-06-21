import { Component, OnInit } from '@angular/core';
import {Patrocinador} from '../moduls/patrocinadores';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.scss']
})
export class PatrocinadoresComponent implements OnInit {
  public patrocinadores:Array<Patrocinador>;
  constructor() {
    this.patrocinadores =[
      new Patrocinador("https://zapatospasse.com/wp-content/uploads/2018/09/Client_Martinelli.png","",""),
      new Patrocinador("https://zapatospasse.com/wp-content/uploads/2018/07/Client_Pikolinos.png","",""),
      new Patrocinador("https://zapatospasse.com/wp-content/uploads/2018/07/Client_Wonders.png","","")

    ];
  }

  ngOnInit() {
  }

}
