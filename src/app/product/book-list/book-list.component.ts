import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private productService: BookService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.books = this.productService.getAll();
  }

}
