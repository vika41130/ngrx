import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<Book>>('collection');

// export const selectBookCollection = createSelector(
//     selectBooks,
//     selectCollectionState,
//     (books, collection) => {
//         collection.map(id => books.find(book => book.id == id));
//     }
// );
