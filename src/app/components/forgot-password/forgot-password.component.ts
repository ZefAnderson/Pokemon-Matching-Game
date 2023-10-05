import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor( 
    // fb:FormBuilder,
    public authService: AuthService
   ) {};
}
