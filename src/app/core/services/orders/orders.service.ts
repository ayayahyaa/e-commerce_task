import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getAllUserOrders(id: string):Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
  }

  checkOutPayment(cartId: string, userDetails: {}):Observable<any>{
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: userDetails,
      }
    );
  }

  getOrdersCash(cartId: string, userDetails: {}):Observable<any>{
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,
      {
      shippingAddress: userDetails,
      });
    }
  }
