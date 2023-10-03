import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  form: FormGroup;
  fb: FormBuilder = new FormBuilder;  // we'll want to be able to access this later outside of the controller

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    });
  }
  submitNewUser() {

  };

}
