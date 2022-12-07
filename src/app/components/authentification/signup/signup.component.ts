import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup

  prenom: FormControl
  nom: FormControl
  identifiant: FormControl
  email: FormControl
  mot_passe: FormControl



  constructor(private fb: FormBuilder,
              private service: UserService) {
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
  }

  soumettre(){
    console.log(this.signupForm.value);
    this.service.adduser(this.signupForm.value).subscribe();
    this.signupForm.reset();
  }

}
