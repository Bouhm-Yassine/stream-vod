import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  searchUsers(query: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/search/users?q=${query}`);
  }
}
