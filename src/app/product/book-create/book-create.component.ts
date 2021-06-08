import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const product = this.bookForm.value;
    this.bookService.saveBook(product);
    this.bookForm.reset();
    alert('thêm mới thành công');
    this.router.navigate(['/product/list']);
  }
}
