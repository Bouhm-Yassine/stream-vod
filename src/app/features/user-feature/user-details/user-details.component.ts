import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `
  <app-user-card [userDetails]="userDetails()"/>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  constructor(private userService: UsersService) { }

  userDetails = signal({})

  @Input() set username(value: string) {
    this.getUserDetails(value)
  }

  getUserDetails(username: string) {
    this.userService.searchUser(username).subscribe(data => this.userDetails.set(data))
  }
}
