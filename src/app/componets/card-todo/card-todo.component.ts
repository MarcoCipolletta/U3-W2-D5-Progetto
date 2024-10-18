import { Component, Input } from '@angular/core';
import { iTodo } from '../../interfaces/iTodo';

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrl: './card-todo.component.scss',
})
export class CardTodoComponent {
  @Input() todo!: iTodo;
  @Input() inputID!: string;

  get randomTime(): string {
    const hours = Math.floor(Math.random() * 12) + 1;

    const minutes = ['00', '15', '30', '45'];

    const amOrPm = Math.random() < 0.5 ? 'AM' : 'PM';

    const formattedMinutes = minutes[Math.floor(Math.random() * 4)];

    return `${hours}:${formattedMinutes} ${amOrPm}`;
  }
}
