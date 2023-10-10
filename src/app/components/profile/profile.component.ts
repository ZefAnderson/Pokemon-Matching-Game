import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreDataService } from 'src/app/service/firestore-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoading: boolean = false;
  user: any;
  uid: any;

  constructor(
    private router: Router, 
    private firestoreDataService: FirestoreDataService,
    ) {}

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
}
