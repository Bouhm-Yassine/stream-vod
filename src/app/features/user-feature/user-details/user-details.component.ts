import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/core/services/users.service';
import { UserDetails } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  template: `
  <pre>
    {{userDetail() | json}}
  </pre>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  constructor(private userService: UsersService) { }

  userDetail = signal({})

  @Input() set username(value: string) {
    console.log('= uSER NAME', value)
    this.userService.searchUser(value).subscribe(data => this.userDetail.set(data))
  }

}
