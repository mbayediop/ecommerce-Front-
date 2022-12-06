import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi= environment.SERVER_URL

  constructor(private http : HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.urlApi+"/users");
  }

  deleteUser(id:number): Observable<User>{
    return this.http.delete<User>(this.urlApi+"/deleteuser/"+id);
  }

  adduser(user: User){
    return this.http.post<User>(this.urlApi+ "/adduser", user);
  }


}
