import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  email: FormControl;
  mot_passe: FormControl;

  constructor(private fb: FormBuilder) {
    this.email = fb.control("",[Validators.email, Validators.required]),
      this.mot_passe = fb.control("",[Validators.required, Validators.minLength(6)])


    this.signinForm = fb.group({
      email : this.email,
      mot_passe: this.mot_passe,
    })

  }

  ngOnInit(): void {
  }

  connecter(){
    console.log(this.signinForm.value)
  }

}
