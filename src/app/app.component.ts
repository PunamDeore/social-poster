import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers: [HttpClientModule]
})
export class AppComponent implements OnInit {
  designFolders: string[] = ['akanksha','dipak','jaiminkumar','kalpesh','punam', 'ketan', 'mayur', 'sagar','saurabh','shivani']; // Update with your actual design folder names
  selectedDesignFolder: string = '';
renderer: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Initialize with the first design folder
    if (this.designFolders.length > 0) {
      this.selectedDesignFolder = this.designFolders[0];
      this.loadHTMLTemplate(this.selectedDesignFolder);
      this.loadCSS(this.selectedDesignFolder);
    }
  }

  onDesignFolderChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedDesignFolder = selectedValue;
    this.loadHTMLTemplate(selectedValue);
    this.loadCSS(selectedValue);
  }

  loadHTMLTemplate(selectedFolder: string) {
    this.http.get(`assets/${selectedFolder}/index.html`, { responseType: 'text' }).subscribe((data) => {
      // Update certificateTemplate with the loaded HTML
      this.socialPostTemplate = data;
    });
  }

  loadCSS(selectedFolder: string) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `assets/${selectedFolder}/css/style.css`;
    head.appendChild(link);
   // this.renderer.appendChild(document.head, link);
    
  }

  socialPostTemplate: string = '';



  Data = {
    orgLogo: "assets/img/org-logo.png",
    orgName: "Maha Mission Education and Career Council",
    orgTagline: '',
    orgAddress: "Office No. 404, Vastu Viva, Beside Sanket Inn, Bhumkar Chowk <br/>Wakad, Pune, Maharashtra - 411057",
    orgEmail: "info@mmeac.org",
    orgAlternateEmail: "",
    orgPhone: "+91 8999417889",
    orgAlternatePhone: "",
    orgFax: "",
    orgWebsite: "www.mmeac.org",
    headerBackgroundImage: "",
    backgroundImage: "assets/img/background.jpg",
    subBackgroundImage: "assets/img/background-1.jpeg",
    heading: "AI-Driven Learning Hub!",
    subHeading: "DIGITAL STUDY CENTER",
    description: `Welcome to SwayamGuru TechLok, a premier study center powered by Maha Mission Education and Career Council-an avant-garde NGO committed to sculpting bright futures. Our mission is to create a dynamic learning environment where individuals can thrive, explore, and grow in the realm of cutting-edge technology.`,
    punchline1: "Learn,Explore,Grow",
    punchline2: "",
    offerline1: "",
    offerline2: "",
    servicesHeading: "",
    services: [
      {
        icon:"",
        name: "FREE MONTHLY TECHNICAL WORKSHOP",
        image: "",
        description: "Embark on a journey into Future Tech: Join our Monthly Workshops for AI Industry Updates, Hands-On Experiences, and Expert Insights. Stay ahead in the ever-evolving tech landscape with us!"
      },
      {
        name: "MEMBERSHIP FEES:",
        image: "",
        description: " hours: ₹2000/month bi bi-clock 8 hours: ₹4000/month bi bi-laptop Laptop: ₹1000/month",
      }
    ],
    featuresHeading: "FACILITIES",
    features: [
      { featureIcon: "bi bi-wifi", FeatureName: "Free WiFi", FeatureImage: "", FeatureDescription: "" },
      { featureIcon: "bi bi-book", FeatureName: "Free Digital Library", FeatureImage: "", FeatureDescription: "" },
      { featureIcon: "bi bi-book", FeatureName: "Free Digital Courses", FeatureImage: "", FeatureDescription: "" },
      { featureIcon: "bi bi-journal-check", FeatureName: "Free Workshops", FeatureImage: "", FeatureDescription: "" },
      { featureIcon: "bi bi-journal-check", FeatureName: "Free MCQ Bank (AI Based)", FeatureImage: "", FeatureDescription: "" },
      { featureIcon: "bi bi-laptop", FeatureName: "PCs for Practice", FeatureImage: "", FeatureDescription: "" },
      { featureIcon: "bi bi-bot", FeatureName: "AI Personal Tutor", FeatureImage: "", FeatureDescription: "" }
    ],
    termsHeading: "",
    terms: [
      { Icon:"",Name: "", Image: "", Description: "" }
    ] // Empty array or remove it if unnecessary
  };

  config = {
    orgName: 'org-name',
    orgTagline: 'org-tagline',
    orgLogo: 'org-logo',
    orgAddress: 'org-address',
    orgEmail: 'org-email',
    orgAlternateEmail: 'org-alternate-email',
    orgPhone: 'org-phone',
    orgAlternatePhone: 'org-alternate-phone',
    orgFax: 'org-fax',
    orgWebsite: 'org-website',
    headerBackgroundImage: 'header-background-image',
    backgroundImage: 'background-image',
    subBackgroundImage: 'image',
    heading: 'heading',
    subHeading: 'sub-heading',
    description: 'description',
    punchline1: 'punchline1',
    punchline2: 'punchline2',
    offerline1: 'offerline1',
    offerline2: 'offerline2',
    servicesHeading: 'services-heading',
    services: 'services', // Should be an array or remove it if unnecessary
    service: 'service',
    serviceIcon: '',
    serviceName: 'service-name',
    serviceImage: 'service-image',
    serviceDescription: 'service-description',
    featuresHeading: 'features-heading',
    features: 'features', // Should be an array or remove it if unnecessary
    Feature: 'feature',
    featureIcon: 'feature-icon',
    FeatureName: 'feature-name',
    FeatureImage: 'feature-image',
    FeatureDescription: 'feature-description',
    termsHeading: 'terms-heading',
    terms: 'terms', // Should be an array or remove it if unnecessary
    term: 'term',
    Icon: '',
    Name: 'term-name',
    Image: 'term-image',
    Description: 'term-description',
  };
}
