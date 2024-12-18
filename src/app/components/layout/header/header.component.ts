import { Component } from '@angular/core';
import { NgIf } from '@angular/common';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../../../service/authentication.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  logoUrl: string = 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=120&h=40&q=80'; 
  profilePicUrl: string = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=40&h=40&q=80'; 
  username: string = 'John Doe';
  isMenuCollapsed: boolean = true;
  constructor(private authService: AuthenticationService) {
    this.isLoggedIn = this.authService.checkLoginStatus();
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}


