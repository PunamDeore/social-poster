// social-post-content.ts

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SocialPostContent {

    orgName: string;
    orgTagline: string;
    orgAddress: string;
    orgEmail: string;
    orgAlternateEmail: string;
    orgPhone: string;
    orgAlternatePhone: string;
    orgFax: string;
    orgWebsite: string;
    headerBackgroundImage: string;
    backgroundImages: string[];
    heading: string;
    subHeading: string;
    description: string;
    punchline1: string;
    punchline2: string;
    offerline1: string;
    offerline2: string;
    services: Service[];
    featuresHeading: string;
    features: Feature[];
    termsHeading: string;
    terms: Term[];
    servicesHeading: string;
    orgLogo: string;

    constructor() {
        this.orgLogo = 'assets/img/org-logo.png';
        this.orgName = 'Maha Mission Education and Career Council';
        this.orgTagline = '';
        this.orgAddress = 'Office No. 404, Vastu Viva, Beside Sanket Inn, Bhumkar Chowk <br/>Wakad, Pune, Maharashtra - 411057';
        this.orgEmail = 'info@mmeac.org';
        this.orgAlternateEmail = '';
        this.orgPhone = '+91 8999417889';
        this.orgAlternatePhone = '';
        this.orgFax = '';
        this.orgWebsite = 'www.mmeac.org';
        this.headerBackgroundImage = '';
        this.backgroundImages = ['assets/img/background.jpg', 'assets/img/background-1.jpeg'];
        this.heading = 'AI-Driven Learning Hub!';
        this.subHeading = 'DIGITAL STUDY CENTER';
        this.description = `Welcome to SwayamGuru TechLok, a premier study center powered by Maha Mission Education and Career Council-an avant-garde NGO committed to sculpting bright futures. Our mission is to create a dynamic learning environment where individuals can thrive, explore, and grow in the realm of cutting-edge technology.`;
        this.punchline1 = 'Learn,Explore,Grow';
        this.punchline2 = '';
        this.offerline1 = '';
        this.offerline2 = '';
        this.servicesHeading = '';
        this.services = [
            {
                name: 'FREE MONTHLY TECHNICAL WORKSHOP',
                image: '',
                description: 'Embark on a journey into Future Tech: Join our Monthly Workshops for AI Industry Updates, Hands-On Experiences, and Expert Insights. Stay ahead in the ever-evolving tech landscape with us!'
            },
            {
                name: 'MEMBERSHIP FEES:',
                image: '',
                description:  'bi bi-clock 4 hours: ₹2000/month bi bi-clock 8 hours: ₹4000/month bi bi-laptop Laptop: ₹1000/month' ,
            }

        ];
        this.featuresHeading = 'FACILITIES';
        this.features = [
            { icon: 'bi bi-wifi', name: 'Free WiFi', image: '', description: '' },
            { icon: 'bi bi-book', name: 'Free Digital Library', image: '', description: '' },
            { icon: 'bi bi-book', name: 'Free Digital Courses', image: '', description: '' },
            { icon: 'bi bi-journal-check', name: 'Free Workshops', image: '', description: '' },
            { icon: 'bi bi-journal-check', name: 'Free MCQ Bank (AI Based)', image: '', description: '' },
            { icon: 'bi bi-laptop', name: 'PCs for Practice', image: '', description: '' },
            { icon: 'bi bi-bot', name: 'AI Personal Tutor', image: '', description: '' }
        ];
        
        this.termsHeading ='';
        this.terms = [];
    }
}

export interface Service {
    name: string;
    image: string;
    description: string;
}

export interface Feature {
icon:string;
    name: string;
    image: string;
    description: string;
}

export interface Term {
    name: string;
    image: string;
    description: string;
}
