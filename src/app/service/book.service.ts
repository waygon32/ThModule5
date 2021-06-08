import {Injectable} from '@angular/core';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [{
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
    return this.books;
  }

  saveBook(product) {
    this.books.push(product);
  }

  findById(id: number) {
    return this.books.find(product => product.id === id);
  }

  updateBook(id: number, product: Book) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books[i] = product;
      }
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(product => {
      return product.id !== id;
    });
  }
}
