import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorders } from '../../../shared/interfaces/iorders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getAllUserOrders(id: string){
    return this.http.get<Iorders[]>(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
  }

  checkOutPayment(cartId: string, userDetails: {}){
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: userDetails,
      }
    );
  }

  getOrdersCash(cartId: string, userDetails: {}){
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,
      {
      shippingAddress: userDetails,
      });
    }
  }
