import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private user: User = {
    name: '',
    lastname: '',
    birth: '',
    status: 0,
    gender: 0,
  };
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8000/api/';

  public getUsers(page = 0, field = null, dir = null): Observable<User[]> {
    let sorter = '';
    console.log('field: ', field);
    if (field !== null) sorter = `/${field}/${dir}`;
    return this.http.get<User[]>(this.apiUrl + `users/${page}/10${sorter}`);
  }

  public getUser(id: Number): Observable<User> {
    return this.http.get<User>(this.apiUrl + 'user/' + id.toString());
  }

  public updateUser(id: Number, data: any): Observable<any> {
    let result: any;
    if (id > 0)
      result = this.http.put<any>(this.apiUrl + 'user/' + id.toString(), data);
    if (id == 0) result = this.http.post<any>(this.apiUrl + 'user', data);
    return result;
  }

  public deleteUser(id: Number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + 'user/' + id.toString());
  }
}
