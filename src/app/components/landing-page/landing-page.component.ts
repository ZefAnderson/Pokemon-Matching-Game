import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

 constructor( 
  // fb:FormBuilder,
  public authService: AuthService
 ) {
  // form: FormGroup;
  // fb: FormBuilder = new FormBuilder;  // we'll want to be able to access this later outside of the controller
  //   this.form = fb.group({
  //     firstName: [''],
  //     lastName: [''],
  //     email: [''],
  //     password: ['']
  //   });
  }

  
 submitNewUser() {

 };
}

