import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #input (input)="search.emit(input.value)" type="text" class="border-white border-2 border-solid rounded-lg bg-slate-800 p-2 w-full outline-0" />
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent {
  @Output() search = new EventEmitter()
}
