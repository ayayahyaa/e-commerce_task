import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders/orders.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  templateUrl: './allorders.component.html',
  imports: [CurrencyPipe, ],
  styleUrl: './allorders.component.scss'
})
export class AllOrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.getUserOrders().subscribe({
      next: (res) => {
        this.orders = res;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
      }
    });
  }
}
