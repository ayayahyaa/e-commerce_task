import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { OrdersService } from '../../core/services/orders/orders.service';
import { CurrencyPipe, isPlatformBrowser } from '@angular/common';
import { Iorders } from '../../shared/interfaces/iorders';

@Component({
  selector: 'app-orders',
  imports: [CurrencyPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

    orders:Iorders[] = [];

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
            this.orders = res;
          },
        })
      }
    }

}
