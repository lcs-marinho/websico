import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/components/navbar/navbar.component';
import { CarrouselComponent } from 'src/shared/components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarrouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
