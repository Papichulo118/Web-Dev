import { Component } from '@angular/core';
import { Category } from 'src/app/items/categories';
import { Product, products } from 'src/app/items/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  currentCategory: string = "All";
  itemsList: any = products;
  categories: string[] = this.categoriesList(this.itemsList);

  onNotify(): void {
    alert("notify");
  }
  share(value: string) {
    const url = `tg://msg_url?url=${encodeURIComponent(value)}`;
    window.location.href = url;
  }

  takeCategory(category: string): any {
    this.currentCategory = category;
    return this.currentCategory === "All" ? this.itemsList : this.itemsList.filter((item: { category: Category }) => item.category.name === category);
  }

  categoriesList(items: Product[]): string[] {
    const categories = new Set<string>();
    categories.add("All");
    items.forEach((item) => categories.add(item.category.name));
    return Array.from(categories);
  }

  updateLike(likes: number, product: Product) {
    product.likes = likes;
  }
  delete(product: Product): void {
    const index = this.itemsList.indexOf(product);
    if (index !== -1) {
      this.itemsList.splice(index, 1);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
