import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="users.length > 0; else nodata" class="h-96 overflow-auto mt-5 p-4 border-white border-2 border-solid rounded-lg">
      <ul>
        <li *ngFor="let user of users" class="mb-4 pb-4 border-b-2 border-slate-400 flex justify-between items-center">
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
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: User[] = []
}
