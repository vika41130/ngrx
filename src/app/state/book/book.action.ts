import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export const addBook = createAction(
    '[Book List] Add Book',
    props<{book: Book}>()
);

export const removeBook = createAction(
    '[Book List] Remove Book',
    props<{bookId: string}>()
);

// retrievedBookList action
export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{books: ReadonlyArray<Book>}>()
);
