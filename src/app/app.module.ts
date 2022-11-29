import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MueblesListComponent } from './muebles-list/muebles-list.component';
import { InputStockComponent } from './input-stock/input-stock.component';
import { NagelmueblesAboutComponent } from './nagelmuebles-about/nagelmuebles-about.component';
import { NagelmueblesBodyComponent } from './nagelmuebles-body/nagelmuebles-body.component';
import { FormsModule } from '@angular/forms';
import { CarritoListComponent } from './carrito-list/carrito-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MueblesListComponent,
    InputStockComponent,
    CarritoListComponent,
    NagelmueblesAboutComponent,
    NagelmueblesBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
