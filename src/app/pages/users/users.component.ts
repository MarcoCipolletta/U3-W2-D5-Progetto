import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { UsersService } from '../../services/users.service';
import { iUser } from '../../interfaces/iUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: iUser[] = [];

  constructor(private todosSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit() {
    this.usersSvc.addEmptyArrToUsersTodo();
    this.usersSvc.getUserWithTodos(this.todosSvc.todos);

    this.users = this.usersSvc.users;
  }
}
