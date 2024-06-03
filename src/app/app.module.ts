import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/shared/components/footer/footer.component';
import { ContentTwoComponent } from 'src/shared/components/content-two/content-two.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavbarComponent,
    ContentTwoComponent,
    FooterComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
