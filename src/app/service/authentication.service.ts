import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private router: Router, private toastr: ToastrService, private firebaseService: FirebaseService) {}


  private saveSession(user: any, token: string) {
    const expiration = Date.now() + 30 * 60 * 1000;

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expiration.toString());
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    this.router.navigate(['/home']);
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = this.firebaseService.getAuthInstance();

    return signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const token = await user.getIdToken();
        this.saveSession(user, token);
      })
      .catch((error) => {
        console.error('Error during Google login:', error);
        this.toastr.error('Error during Google login');
      });
  }

  registerWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = this.firebaseService.getAuthInstance();

    return signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const token = await user.getIdToken();
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        this.toastr.success('Registro exitoso');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Error during Google registration:', error);
        this.toastr.error('Error during Google registration');
      });
  }

  loginWithEmail(email: string, password: string) {
    const auth = this.firebaseService.getAuthInstance();
    return signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      });
  }

  registerWithEmail(email: string, password: string) {
    const auth = this.firebaseService.getAuthInstance();
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        this.toastr.success('Registro exitoso');
        this.router.navigate(['/home']);
      });
  }

  checkLoginStatus(): boolean {
    const auth = getAuth();
    const user = auth.currentUser; 
    return !!user; 
  }
} 