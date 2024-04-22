import { Component } from '@angular/core';
import { SocialPostContent } from './social-post-content'; // Import the SocialPostContent class

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  content: SocialPostContent; // Define a property to hold the content

  constructor() {
    // Initialize the content
    this.content = new SocialPostContent();
  }
}
