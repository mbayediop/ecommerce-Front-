import {Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {tap} from "rxjs";
import {Article} from "../../../models/article.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  users: User[]= [];

  afficherModal: boolean= false
  afficherListUser: boolean= false

  signupForm: FormGroup

  prenom: FormControl
  nom: FormControl
  identifiant: FormControl
  email: FormControl
  mot_passe: FormControl

  constructor(private service: UserService,
              private fb: FormBuilder,) {
    this.prenom = fb.control("",[Validators.required]),
      this.nom= fb.control("",[Validators.required]),
      this.email= fb.control("",[Validators.email, Validators.required]),
      this.identifiant= fb.control("",[Validators.required]),
      this.mot_passe= fb.control("",[Validators.required, Validators.minLength(6)]),

      this.signupForm= fb.group({
        prenom: this.prenom,
        nom: this.nom,
        email: this.email,
        identifiant: this.identifiant,
        mot_de_passe: this.mot_passe,
      })
  }

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
      error: ()=> this.service.getUsers().subscribe(
        (data)=> this.users=data,
      )
      })
  }

  ajouterUser(){
    this.afficherModal= true
    this.afficherListUser=true
    console.log("c'est bon")
  }


   fermerArticleModal(){
    this.afficherModal= false
     this.afficherListUser=false
  }

  soumettre(){
    this.service.adduser(this.signupForm.value).subscribe()
    this.afficherModal= false
    this.afficherListUser= false
  }


}
