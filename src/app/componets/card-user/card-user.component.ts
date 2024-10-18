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
}
