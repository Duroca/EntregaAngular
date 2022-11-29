import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MueblesCartService } from "../muebles-cart.service";
import { Mueble } from "../muebles-list/Mueble";

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.scss']
})
export class CarritoListComponent implements OnInit{

  cartList$: Observable<Mueble[]>;
  constructor(public cart: MueblesCartService) { 
    this.cartList$ = cart.cartList.asObservable();

  
  }

  ngOnInit(): void {
  }

}
