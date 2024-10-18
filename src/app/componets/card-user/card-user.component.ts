import { Component, Input, input } from '@angular/core';
import { iUser } from '../../interfaces/iUser';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.scss',
})
export class CardUserComponent {
  isCollapsed: boolean = true;
  @Input() user!: iUser;

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  syncTodoCompletion(todoId: number, completed: boolean) {
    const todo = this.todosSvc.todos.find((t) => t.id === todoId);
    if (todo) {
      todo.completed = completed;
    }

    this.usersSvc.users.forEach((user) => {
      if (user.todos) {
        const userTodo = user.todos.find((t) => t.id === todoId);
        if (userTodo) {
          userTodo.completed = completed;
        }
      }
    });
  }
}
