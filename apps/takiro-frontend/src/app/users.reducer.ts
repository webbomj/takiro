import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';

export const usersFeatureKey = 'users';

export interface User {
  name: string;
}

export interface UserState {
  currentUser: User;
}

export const initialState: UserState = {
  currentUser: {
    name: 'Abobus',
  },
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.changeUsers, (state, { username }) => ({
    ...state,
    currentUser: { ...state.currentUser, name: username },
  }))
);
