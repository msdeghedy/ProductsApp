import { Product } from './../../product';
import { createReducer, on, props } from '@ngrx/store';
import { decreaseCounter, increaseCounter } from './favouritesCounter.action';
import { state } from '@angular/animations';
interface favouritesCounterState {
  count: number;
  items: Array<Product>;
}

const initialState: favouritesCounterState = {
  count: 0,
  items: [],
};

export const favouritesCounterReducer = createReducer(
  initialState,
  on(increaseCounter, (state, { item }) => {
    if (state.items.some((itm) => itm.id === item.id)) return { ...state };

    return {
      ...state,
      count: state.count + 1,
      items: [...state.items, item],
    };
  }),

  on(decreaseCounter, (state, { id }) => ({
    ...state,
    count: state.count - 1,
    items: [...state.items.filter((item) => item.id !== id)],
  }))
);
