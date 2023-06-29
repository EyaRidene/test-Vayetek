import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../entity/User';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(private userService: ApiUsersService) {}

  @Input() user: User = null;
  @Output() userDeleted = new EventEmitter<Number>(); // Emitting the user's ID as a number

  ngOnInit(): void {}

  incrementEnfant(event: MouseEvent) {
    event.stopPropagation();
    this.user.nombre_enfants = this.user.nombre_enfants + 1;
    this.updateUser(event);
  }

  decrementEnfant(event: MouseEvent) {
    if (this.user.nombre_enfants > 0) {
      this.user.nombre_enfants = this.user.nombre_enfants - 1;
      this.updateUser(event);
    }
  }

  updateUser(event: MouseEvent) {
    event.stopPropagation();
    this.userService.editUser(this.user).subscribe((updatedUser: User) => {
      this.user = updatedUser;
    });
  }

  deleteUser(event: MouseEvent) {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(this.user.id).subscribe(() => {
        this.userDeleted.emit(this.user.id);
      });
    }
  }
}
