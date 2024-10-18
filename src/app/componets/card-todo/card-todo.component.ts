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
}
