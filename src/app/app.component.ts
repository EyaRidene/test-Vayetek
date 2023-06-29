import { Component, OnInit } from '@angular/core';
import { User } from './entity/User';
import { ApiUsersService } from './services/api-users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test-technique';
  listUsers: User[] = [];
  sideBarIsOpen: boolean = false;
  userToEdit: User = null;

  constructor(private userService: ApiUsersService) {}

  ngOnInit(): void {}

  LoadListUsersFromJson() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.listUsers = users;
      console.log(users);
    });
  }

  openSlidBarToAdd() {
    this.userToEdit = null;
    this.sideBarIsOpen = true;
  }
  closeSideBar(event: User | null) {
    if (event) {
      this.listUsers.push(event);
      console.log(this.listUsers, event);
      this.LoadListUsersFromJson();
    }

    this.sideBarIsOpen = false;
  }

  editUser(user: User) {
    this.userToEdit = user;
    this.sideBarIsOpen = true;
  }

  deleteUser(id: number) {
    this.listUsers = this.listUsers.filter((user) => user.id !== id);
  }

  SaveListUsersInJson() {}
}
