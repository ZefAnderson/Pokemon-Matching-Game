import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FirestoreDataService } from 'src/app/service/firestore-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  playerNameForm: FormGroup
  isLoading: boolean = false;
  isEditing: boolean = false;
  user: any;
  uid: any;

  constructor(
    private router: Router, 
    private firestoreDataService: FirestoreDataService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    ) {
      this.playerNameForm = this.formBuilder.group({
        playerName: ['', [Validators.required, Validators.minLength(1)]],
      })
    }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if(userJson !== null) {
      const user = JSON.parse(userJson)
      this.uid = user.uid
    }

    if (this.uid !== null) {
      this.isLoading = true;
      this.firestoreDataService.getUser(this.uid).subscribe(
        (data) => {
        this.user = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching user data:', error);
        this.isLoading = false;
      })
    }
  }

  goToSetUp() {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const user = JSON.parse(userJson);
      if (user) {
        this.router.navigate([`setup/${user.uid}`])
      }
    }
  }

  goToAvatars() {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const user = JSON.parse(userJson);
      if (user) {
        this.router.navigate([`avatars/${user.uid}`])
      }
    }
  }

  editPlayerName() {
    this.isEditing = true;
  }

  updatePlayerName() {
    const userJson = localStorage.getItem('user');
    if (userJson !== null) {
      const user = JSON.parse(userJson);
      if (user && this.playerNameForm.valid) {
        const newName = this.playerNameForm.value.playerName;
        this.authService.UpdatePlayerName(user.uid, newName).subscribe(() => {
          this.isEditing = false;
        })
      }
    }
  }

  nvmButton() {
    this.isEditing = false;
  }
}
