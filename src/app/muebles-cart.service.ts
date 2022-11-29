import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mueble } from './muebles-list/Mueble';



@Injectable({
  providedIn: 'root'
})
export class MueblesCartService {

  private _cartList: Mueble[] = [];
  cartList: BehaviorSubject <Mueble []> = new BehaviorSubject <Mueble []>([]);

  constructor() { }

  addToCart(mueble: Mueble) {
    let item = this._cartList.find(v1 => v1.nombre == mueble.nombre);
    if (!item){
      this._cartList.push({ ... mueble});
    }else{
      item.cantidad += mueble.cantidad;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
