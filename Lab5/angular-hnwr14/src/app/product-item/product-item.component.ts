import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any
  @Output() likesUpdate = new EventEmitter<number>();
  @Output() deleteUpdate = new EventEmitter();

  clicked: boolean = false;


  like(): void {
    this.product.likes++;
    this.likesUpdate.emit(this.product.likes);
    this.clicked = true;
  }

  delete(): void {
    this.deleteUpdate.emit(this.product.id);
  }
}
