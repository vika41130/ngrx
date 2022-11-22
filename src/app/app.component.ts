import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from './models/book.model';
import { addBook, removeBook, retrievedBookList } from './state/book/book.action';
import { selectBooks, selectCollectionState } from './state/book/book.selector';
import { GoogleBooksService } from './state/book/book.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
	books$ = this.store.select(selectBooks);
	bookCollection$ = this.store.select(selectCollectionState);

	constructor(
		private store: Store,
		private booksService: GoogleBooksService
	) {

	}

	ngOnInit(): void {
		this.booksService.getBooks().subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
	}

	onAdd(book: Book) {
		this.store.dispatch(addBook({book}));
	}

	onRemove(bookId: string) {
		this.store.dispatch(removeBook({bookId}));
	}

}
