import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() username: string = 'John Doe';
  @Input() profilePicUrl: string = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d';
  @Input() logoUrl: string = 'https://images.unsplash.com/photo-1633409361618-c73427e4e206';

 }


