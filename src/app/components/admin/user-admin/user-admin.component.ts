import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {tap} from "rxjs";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  users: User[]= [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe({

        next: (data:User[] )=>{
          this.users = data;
        },
        error: (err: any)=>{
          console.log("Error : ", err);
        },
        complete: () => {
          console.log("Tout se passe comme prevu");
        }

    })
  }

  OnDeleteUser(id: number| undefined){
    this.service.deleteUser(id!).subscribe({
      complete: ()=> this.service.getUsers().subscribe(
        (data)=> this.users=data,
      )
      }
    )
  }



}
