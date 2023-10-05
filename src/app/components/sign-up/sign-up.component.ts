import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  

  constructor(fb: FormBuilder) {
    // this.form = fb.group({
    //   firstName: [''],
    //   lastName: [''],
    //   email: [''],
    //   password: ['']
    // });
  }
  submitNewUser() {

  };

}
