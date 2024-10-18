import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/iTodo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  todos: iTodo[] = [];
  completed: iTodo[] = [];
  constructor(private todosSvc: TodosService) {}

  ngOnInit() {
    this.todos = this.todosSvc.todos;
    this.completed = this.todos.filter((todo) => todo.completed);
  }
}
