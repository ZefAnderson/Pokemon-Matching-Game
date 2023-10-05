import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  

  constructor(
    fb: FormBuilder,
    public authService: AuthService
    ) {
  }
  signUp(email: string, password: string, firstName: string, lastName: string, playerName: string){
    console.log(email)
    this.authService.SignUp(email, password, firstName, lastName, playerName)
    
  }
}
