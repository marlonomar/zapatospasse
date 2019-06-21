import { Component, OnInit } from '@angular/core';
import {Componente} from '../moduls/infos';

@Component({
  selector: 'app-more-infos',
  templateUrl: './more-infos.component.html',
  styleUrls: ['./more-infos.component.scss']
})
export class MoreInfosComponent implements OnInit {
  public component: Array<Componente>;
  constructor() {
    this.component =[
      new Componente("headphones-alt","CONTACTO",`TIENES ALGUNA DUDA? PUEDES ENVIARNOS UN EMAIL A VENTAONLINE@ZAPATOS.COM O LLAMANOS  AL   +34 916 128 648`),
      new Componente("box-open","ENVIO ECONOMICO","ECHA UN VISTASO A NUESTRO MODELO DE ENVIO. EN TU DOMICILIO EN UN DIA"),
      new Componente("file-invoice","DEVOLUCIONES","SI NO ESTAS CONFORME CON TU PEDIDO PUEDES DEVOLVERLO"),
      new Componente("credit-card","COMPRA SEGURA","COMODIDAD Y SEGURIDAD GARANTIZADA")
    ];
  }

  ngOnInit() {
  }

}
