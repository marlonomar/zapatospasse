import { Component, OnInit } from '@angular/core';
import {Sociales} from '../moduls/redesSociales';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  public mensaje :string;
  public telefonoIcon :string;
  public telefono : string;
  public correo : string;
  public correoIcono: string;
  public redeSociales : Array<Sociales>

  constructor() {

    this.redeSociales = [
     
      new Sociales ("fa-facebook-f","https://www.facebook.com/passezapateriasmadrid","Facebook"),
      new Sociales("fa-twitter","https://twitter.com/@PasseZapaterias","Twitter"),
      new Sociales("fa-google-plus-g","https://plus.google.com/109891890047233509589","Google Plus"),
      new Sociales("fa-youtube","https://www.youtube.com/channel/UCJsdz495LUr50UbGmlEesBA","YouTube"),
      new Sociales("fa-instagram","https://www.instagram.com/passe_zapaterias/","Instagram")

    ];

    this.mensaje = "¿HABLAMOS?:";
    this.telefono ="34 916 128 648 ";
    this.correo = "ventaonline@zapatospasse.com";
    this.telefonoIcon ="fa-phone-alt";
    this.correoIcono ="fa-envelope";
   }

  ngOnInit() {
    console.log(this.redeSociales)
  }

  

}
