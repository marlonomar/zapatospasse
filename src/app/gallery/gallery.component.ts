import { Component, OnInit } from '@angular/core';
import {FotoGallery} from '../moduls/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public banner :Array<FotoGallery>;
  constructor() {
    this.banner =[
      new FotoGallery("https://i2.wp.com/sabedenada.com/wp-content/uploads/2018/12/12201951696490.jpg?fit=600%2C400&ssl=1","paisaje","fotografia","Ver Collecion","Calidad"),
      new FotoGallery("http://www.blogmais.org/ourimg/small/20/207619_tumblr-phone-wallpapers.jpg","tarde","dream","ver mas","Comodidad")
    ];
  }

  ngOnInit() {
  }

}
