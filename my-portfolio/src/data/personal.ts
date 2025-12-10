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
  interests: ['Hiking', 'Golf', 'Financial Markets', 'Technology Innovation', 'Snowboarding']
};
