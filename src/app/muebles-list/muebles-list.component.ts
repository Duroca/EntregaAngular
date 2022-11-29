import { Component, OnInit } from '@angular/core';
import { Mueble } from './Mueble';
import { MueblesCartService } from "../muebles-cart.service";

@Component({
  selector: 'app-muebles-list',
  templateUrl: './muebles-list.component.html',
  styleUrls: ['./muebles-list.component.scss']
})
export class MueblesListComponent implements OnInit{
  
  muebles: Mueble[] = [
    {
      nombre: "Silla Jesuita",
      descuento: 30,
      disp: true,
      cantidad: 0,
      stock: 12,
      image: "assets/img/silla-jesuita.png"
    },
    {
      nombre: "Silla Rustica",
      descuento: 10,
      disp: false,
      cantidad: 0,
      stock: 0,
      image: "assets/img/silla-rustica.png"
    },   
    {
      nombre: "Sillon Una Plaza",
      descuento: 15,
      disp: true,
      cantidad: 0,
      stock: 11,
      image: "assets/img/sillon-una-plaza.png"
    },
    {
      nombre: "Mesa Ratona",
      descuento: 15,
      disp: true,
      cantidad: 0,
      stock: 2,
      image: "assets/img/mesa-ratona.jpeg"
    },
  ]
  

  constructor(private cart: MueblesCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(Mueble: Mueble): void{
    this.cart.addToCart(Mueble);
    Mueble.stock -= Mueble.cantidad;
    Mueble.cantidad=0;
  }

}
