import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../entity/User';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css'],
})
export class ConfigSideBarComponent implements OnInit {
  constructor(private userService: ApiUsersService) {}
  @Input() user: User = null;
  @Output() onClose = new EventEmitter<User>();
  nom: String = '';
  prenom: String = '';
  nbEnfant: Number = 0;
  ngOnInit(): void {
    if (this.user) {
      this.nom = this.user.nom;
      this.prenom = this.user.prenom;
      this.nbEnfant = this.user.nombre_enfants;
    }
  }

  submission() {
    if (!this.user) {
      this.userService
        .addNewUser(this.nom, this.prenom, this.nbEnfant)
        .subscribe((user: any) => {
          console.log(user);
          this.cancel(user);
        });
    } else {
      this.user.nom = this.nom;
      this.user.prenom = this.prenom;
      this.user.nombre_enfants = this.nbEnfant;

      this.userService.editUser(this.user).subscribe((editedUser: any) => {
        console.log(editedUser);
        this.cancel(editedUser);
      });
    }
  }

  cancel(user: any = null) {
    this.onClose.emit(user);
  }
}
