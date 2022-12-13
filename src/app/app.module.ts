import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {WelcomeComponent} from './welcome/welcome.component'
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
