import { Component } from '@angular/core';
import { SocialPostContent } from './social-post-content'; // Import the SocialPostContent class
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  // content: SocialPostContent; // Define a property to hold the content

  constructor(public content: SocialPostContent) {
    // Initialize the content
    // this.content = new SocialPostContent();
  }
}
