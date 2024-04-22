// social-post-content.ts

export class SocialPostContent {
    orgLogo: string;
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

    constructor() {
        this.orgLogo = 'img/org-logo.png';
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
        this.backgroundImages = ['img/background.jpg', 'img/background-1.jpeg'];
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
                image: 'fas fa-list',
                description: 'Embark on a journey into Future Tech: Join our Monthly Workshops for AI Industry Updates, Hands-On Experiences, and Expert Insights. Stay ahead in the ever-evolving tech landscape with us!'
            }
        ];
        this.featuresHeading = 'FACILITIES';
        this.features = [
            { name: 'Free WiFi', image: 'bi bi-wifi', description: '' },
            { name: 'Free Digital Library', image: 'bi bi-book', description: '' },
            { name: 'Free Digital Courses', image: 'bi bi-book', description: '' },
            { name: 'Free Workshops', image: 'bi bi-journal-check', description: 'P' },
            { name: 'Free MCQ Bank (AI Based)', image: 'bi bi-journal-check', description: '' },
            { name: 'PCs for Practice', image: 'bi bi-laptop', description: '' },
            { name: 'AI Personal Tutor', image: 'bi bi-bot', description: '' }
        ];
        this.termsHeading = 'MEMBERSHIP FEES:';
        this.terms = [
            { name: '4 hours: ₹2000/month', image: 'bi bi-clock', description: '' },
            { name: '8 hours: ₹4000/month', image: 'bi bi-clock', description: '' },
            { name: 'Laptop: ₹1000/month', image: 'bi bi-laptop', description: '' }
        ];
    }
}

export interface Service {
    name: string;
    image: string;
    description: string;
}

export interface Feature {
    name: string;
    image: string;
    description: string;
}

export interface Term {
    name: string;
    image: string;
    description: string;
}
