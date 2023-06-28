import { Injectable } from '@angular/core';
import { User } from '../entity/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private http: HttpClient) {}
  readonly Path = 'http://localhost:3000/users';

  addNewUser(nom: String, prenom: String, nombreEnfants: Number) {
    const user = {
      nom: nom,
      prenom: prenom,
      nombre_enfants: nombreEnfants,
    };

    return this.http.post(this.Path, user);
  }

  editUser(user: User): Observable<User> {
    const editUrl = `${this.Path}/${user.id}`;

    return this.http.put<User>(editUrl, user);
  }

  deleteUser(userId: Number): Observable<any> {
    const deleteUrl = `${this.Path}/${userId}`;

    return this.http.delete(deleteUrl);
  }

  getUsers(): Observable<User[] | any> {
    return this.http.get(this.Path);
  }
}
