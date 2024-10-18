import { iTodo } from '../../interfaces/iTodo';
import { UsersService } from '../../services/users.service';
import { TodosService } from './../../services/todos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todos: iTodo[] = [];
  inputValue: string = '';
  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}
  ngOnInit() {
    this.todosSvc.getTodosWithUsername(this.usersSvc.users);
    this.todos = this.todosSvc.todos;
  }
  get filteredTodos(): iTodo[] {
    if (!this.inputValue) {
      return this.todos;
    }
    return this.todos.filter((todo) => {
      if (todo.user) {
        return todo.user.username
          .toLowerCase()
          .includes(this.inputValue.toLowerCase());
      } else return [];
    });
  }
}
