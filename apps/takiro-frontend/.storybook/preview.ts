import { moduleMetadata } from '@storybook/angular';
import { provideMockStore } from '@ngrx/store/testing'; // Импорт MockStore
import { initialState } from '../src/app/users.reducer';

export const decorators = [
  moduleMetadata({
    providers: [
      provideMockStore({
        initialState: initialState, // Укажите начальное состояние вашего Store
      }),
    ],
  }),
];
