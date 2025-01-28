import { Component, input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getUserName } from './users.selectors';
import { UserState } from './users.reducer';
import { Store } from '@ngrx/store';
import { UsersActions } from './users.actions';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <div>
      name:
      <pre>{{ user }}</pre>
    </div>
    <button (click)="changeUser()">{{ text() }}</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  text = input<string>('Hello, on takiro-frontend!');
  user: unknown | null = null;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.store.select(getUserName).subscribe((currentUser) => {
      this.user = currentUser;
    });
  }

  changeUser() {
    this.store.dispatch(UsersActions.changeUsers({ username: 'biba' }));
  }
}
