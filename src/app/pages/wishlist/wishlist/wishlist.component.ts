import { Component, inject } from '@angular/core';
import { WritableSignal, signal } from '@angular/core';
import { Iproduct } from '../../../shared/interfaces/iproduct';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent {
  wishList: WritableSignal<Iproduct[]> = signal([]);

  toggleWishlist(product: Iproduct): void {
    const currentList = this.wishList();
    const index = currentList.findIndex((item) => item._id === product._id);

    if (index > -1) {
      this.wishList.set(currentList.filter((item) => item._id !== product._id));
    } else {
      this.wishList.set([...currentList, product]);
    }
  }

  isInWishlist(product: Iproduct): boolean {
    return this.wishList().some((item) => item._id === product._id);
  }
}
