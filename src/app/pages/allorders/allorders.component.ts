import { isPlatformBrowser } from '@angular/common';
import { OrdersService } from './../../core/services/orders/orders.service';
import { Component, inject, OnInit, PLATFORM_ID  } from '@angular/core';
import { IallOrders } from './iall-orders';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class OrdersComponent implements OnInit {
  allOrders:IallOrders[] = []

  private readonly ordersService = inject(OrdersService)
  private readonly PLATFORM_ID = inject(PLATFORM_ID)


  ngOnInit():void {
    this.getOrders();
  }

  getOrders():void {
    if(isPlatformBrowser(this.PLATFORM_ID)){
      const userId = localStorage.getItem('userId') as string
      this.ordersService.getAllUserOrders(userId).subscribe({
        next:(res)=>{
          console.log(res);

        }
      })
    }
  }
}
