import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { UserListComponent } from '../user-list/user-list.component';
import { UserSearchComponent } from '../user-search/user-search.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserSearchComponent, UserListComponent],
  template: `
    <div class="w-1/2">
      <app-user-search (search)="searchTerm.set($event)"/>
      <app-user-list [users]="users()"/>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  constructor(private userService: UsersService) { }

  searchTerm = signal<string>('')

  users = toSignal(
    toObservable(this.searchTerm)
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((term: string) => term.length > 2),
        switchMap((term: string) => this.userService.searchUsers(term)),
        map((res: any) => res.items)
      ),
    { initialValue: [] }
  )

}
