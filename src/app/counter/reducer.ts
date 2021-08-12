import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './actions';

export const initialState = localStorage.productsInCart
  ? JSON.parse(localStorage.productsInCart).reduce((acc: number, prod: any) => acc +=prod.counter, 0)
    : 0

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
);

export function counterReducer(state:any, action:any) {
  return _counterReducer(state, action);
}
