import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SetUserData(result, email, firstName, lastName, playerName);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate([`profile/${user.uid}`]);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string, firstName: string, lastName: string, photoURL: string, playerName: string) {
    console.log('hopefully works')
    return this.afAuth
      .createUserWithEmailAndPassword(email, password, firstName, lastName, photoURL, playerName )
      .then((result) => {
        console.log(result + 'this?')
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result, email, firstName, lastName, photoURL, playerName);
        console.log(result.user)
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any, email: string, firstName: string, lastName: string, photoURL: string, playerName: string) {
    console.log(user)
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.user.uid}`
      );

    user.uid = user.user.uid ? user.user.uid: '';
    const userData: User = {
      uid: user.uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      playerName: playerName,
      photoURL: '../../../assets/images/avatars/default.png',
      emailVerified: user.emailVerified ? user.emailVerified : false,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
  //update avatar image
  UpdateAvatar(uid: string, selectedAvatarValue: string): Observable<void> {
    const userRef = this.afs.doc(`users/${uid}`);
    const updateData = {
      photoURL: selectedAvatarValue
    }

    return from(userRef.update(updateData));
  }
  //update player name 
  UpdatePlayerName(uid: string, newName: string): Observable<void> {
    const userRef = this.afs.doc(`users/${uid}`);
    const updateData = {
      playerName: newName
    }

    return from(userRef.update(updateData))
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}