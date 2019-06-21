import { Component, OnInit } from '@angular/core';
import {Slide} from '../moduls/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public sliders:Array<Slide>;
  constructor() {
    this.sliders =[
      new Slide ("https://zzsolucionesdeimpresion.com/wp-content/uploads/elementor/thumbs/profesionales-o2fx7yx1b0od417o1n88m9xljoi11t3d7owxyiy6q0.jpg","soy un mensaje","click")
    ];
  }

  ngOnInit() {
  }

}
