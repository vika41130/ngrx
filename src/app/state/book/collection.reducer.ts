import { createReducer, on } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import { addBook, removeBook } from "./book.action";

export const initialState: ReadonlyArray<Book> = [];

export const collectionReducer = createReducer(
    initialState,
    on(removeBook, (state, {bookId}) => state.filter(book => book.id != bookId)),
    on(addBook, (state, {book}) => {
        if (state.findIndex((_book) => _book.id == book.id) > -1) return state;
        return [...state, book];
    })
);
