import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, filter, map, of, switchMap, tap } from 'rxjs';
import { UsersService } from 'src/app/core/services/users.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="w-1/2">
    <input #search (input)="searchTerm.set(search.value)" type="text" class="border-white border-2 border-solid rounded-lg bg-slate-800 p-2 w-full outline-0" />
    <div *ngIf="users().length > 0; else nodata" class="h-96 overflow-auto mt-5 p-4 border-white border-2 border-solid rounded-lg">
      <ul>
        <li *ngFor="let user of users()" class="mb-4 pb-4 border-b-2 border-slate-400 flex justify-between items-center">
          <div class="flex items-center">
            <img class="rounded-full w-12 h-12 object-cover mr-4" [src]="user.avatar_url" />
            <span>{{user.login}}</span>
          </div>
          <a [href]="user.url" target="_blank">Uri</a>
        </li>
      </ul>
    </div>
    <ng-template #nodata>
      <div class=" text-center p-10 mt-5 border-white border-2 border-solid rounded-lg">
        No Data
      </div>
    </ng-template>

  </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent {
  searchTerm = signal<string>('')

  constructor(private userService: UsersService) {
    effect(() => console.log(this.users()))
  }

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
