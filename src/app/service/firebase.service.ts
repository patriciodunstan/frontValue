import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseConfig = {
    apiKey: "AIzaSyDefdEhsahMbDKypgroJ9B06QAcxJ7cn3M",
    authDomain: "frontvalue-50ad9.firebaseapp.com",
    projectId: "frontvalue-50ad9",
    storageBucket: "frontvalue-50ad9.appspot.com",
    messagingSenderId: "frontvalue-50ad9",
    appId: "frontvalue-50ad9"
  };

  private auth: Auth;

  constructor() {

    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
  }

  getAuthInstance() {
    return this.auth;
  }
} 