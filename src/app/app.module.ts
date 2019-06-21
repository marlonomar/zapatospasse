import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './informacion/informacion.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { SliderComponent } from './slider/slider.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PatrocinadoresComponent } from './patrocinadores/patrocinadores.component';
import { MoreInfosComponent } from './more-infos/more-infos.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    NavegadorComponent,
    SliderComponent,
    GalleryComponent,
    PatrocinadoresComponent,
    MoreInfosComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
