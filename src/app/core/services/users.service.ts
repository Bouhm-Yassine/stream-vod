import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserDetails } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/search/users?q=${query}`);
  }

  searchUser(username: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(`https://api.github.com/users/${username}`);
  }
}
