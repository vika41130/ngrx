import { createAction } from "@ngrx/store";

export const increment = createAction('[source] increment');
export const decrement = createAction('[source] decrement');
export const reset = createAction('[source] reset');
