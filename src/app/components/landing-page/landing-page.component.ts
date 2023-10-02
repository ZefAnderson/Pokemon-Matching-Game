import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

 constructor(
  public authService: AuthService
 ) {}

 submitNewUser() {

 };

}
