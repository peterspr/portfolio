export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  bio: {
    short: string;
    detailed: string[];
  };
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Preston Petersen',
  title: 'Entry-Level Software Engineer',
  location: 'Seattle, WA',
  email: 'prestonwpetersen@outlook.com',
  github: 'https://github.com/peterspr',
  linkedin: 'https://linkedin.com/in/prestonwpetersen',
  resumeUrl: '/Preston_Petersen_Resume.pdf',
  bio: {
    short: 'Driven developer with hands-on experience in backend engineering, cloud platforms, and machine learning projects.',
    detailed: [
      'I\'m a recent Computer Science graduate passionate about backend development and building scalable systems. My work blends thoughtful design with technical depth, shaped by experience in consulting and real-world projects.',
      'My goal is to contribute to impactful engineering teams where I can grow as a developer and solve meaningful problems. I\'m particularly interested in roles that combine technical challenges with business impact.',
      'Outside of work, I enjoy hiking the Pacific Northwest, golfing, and learning about financial markets and investment strategies.'
    ]
  },
  interests: ['Hiking', 'Golf', 'Financial Markets', 'Technology Innovation', 'Outdoor Photography']
};

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'wellspring-manager',
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'WellSpring Family Store',
    content: 'Preston transformed our entire ordering system. What used to take months now happens in a week. His understanding of our nonprofit constraints and ability to design practical solutions was exceptional.',
    featured: true
  },
  {
    id: 'peak-director',
    name: 'Michael Chen',
    role: 'Analytics Director',
    company: 'Peak Consulting & Analytics',
    content: 'Preston\'s automation tools saved our team countless hours of manual work. His Python skills and attention to detail in financial analysis made him an invaluable contributor to our forensic investigations.',
    featured: true
  },
  {
    id: 'recon-supervisor',
    name: 'Lisa Rodriguez',
    role: 'Engineering Supervisor',
    company: 'Recon Dynamics',
    content: 'During his internship, Preston demonstrated remarkable ability to tackle complex problems. His work on driver behavior analysis showed both technical skill and practical understanding of real-world applications.',
    featured: false
  }
];

export const featuredTestimonials = testimonials.filter(testimonial => testimonial.featured);