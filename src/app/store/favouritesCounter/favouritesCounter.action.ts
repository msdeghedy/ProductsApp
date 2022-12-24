import { createAction, props } from '@ngrx/store';
import { Product } from './../../product';
export const increaseCounter = createAction(
  '[Products Page] increase counter',
  props<{ item: Product }>()
);

export const decreaseCounter = createAction(
  '[Products Page] decrease counter',
  props<{ id: string }>()
);
