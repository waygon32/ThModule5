import {Injectable} from '@angular/core';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  products: Book[] = [{
    id: 1,
    name: 'Không gia đình',
    author: "Hector Malot",
    description: 'Tác phẩm đã được giải thưởng của Viện Hàn lâm Văn học Pháp.'
  }, {
    id: 2,
    name: 'Hai số phận',
    author: "Jeffrey Archer",
    description: 'Sách đạt danh hiệu sách bán chạy nhất theo danh sách của tờ New York Times và năm 1985'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Book) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
