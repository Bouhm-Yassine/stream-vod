import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetails } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-slate-600 rounded-lg shadow-2xl p-4 flex flex-col items-center">
      <img class="rounded-full w-32 h-32 object-cover mx-auto" [src]="userDetails.avatar_url" />
      <h1 class="text-2xl font-bold mt-6">{{userDetails.login}}</h1>
    </div>
    <pre>
    {{userDetails | json}}
    </pre>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input({ required: true }) userDetails!: UserDetails | any
}
