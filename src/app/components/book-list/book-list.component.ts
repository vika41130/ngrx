import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books: ReadonlyArray<Book> | any = [];
  @Output() add = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {
  }

  addBook(book: Book) {
    this.add.emit(book);
  }

}
