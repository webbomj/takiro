import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.reducer';

const getUsersState = createFeatureSelector<UserState>('users');

export const getUserName = createSelector(getUsersState, (state) => {
  return state.currentUser.name;
});
