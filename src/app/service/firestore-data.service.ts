import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  constructor(private firestore: AngularFirestore) { }

  getUser(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }
}
