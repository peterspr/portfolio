export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'consulting' | 'internship' | 'freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'wellspring-consultant',
    company: 'WellSpring Family Store',
    role: 'Operations Consultant',
    period: '2023 - Present',
    location: 'Remote',
    type: 'consulting',
    description: 'Led comprehensive redesign of order management workflows for nonprofit organization, focusing on operational efficiency and volunteer coordination.',
    achievements: [
      'Reduced order fulfillment lead times from months to 1 week',
      'Replaced complex booking calendar system with streamlined weekly pickup process',
      'Improved inventory tracking and volunteer coordination workflows',
      'Enhanced stakeholder communication and reporting systems',
      'Trained staff on new processes and technology implementations'
    ],
    technologies: ['JavaScript', 'Formstack', 'Salesforce', 'Excel', 'Process Automation']
  },
  {
    id: 'peak-consulting',
    company: 'Peak Consulting & Analytics',
    role: 'Financial Analysis Consultant',
    period: '2022 - 2023',
    location: 'Portland, OR',
    type: 'consulting',
    description: 'Specialized in forensic financial analysis and automation for complex financial investigations, developing custom tools and workflows.',
    achievements: [
      'Reduced manual reporting workload by 40% through Python automation',
      'Developed forensic financial analysis workflows and tools',
      'Created advanced Excel modeling templates for complex calculations',
      'Implemented comprehensive ETL pipelines for data processing',
      'Collaborated with legal teams on financial investigation cases'
    ],
    technologies: ['Python', 'Pandas', 'Excel VBA', 'SQL', 'Data Visualization', 'ETL']
  },
  {
    id: 'recon-dynamics',
    company: 'Recon Dynamics',
    role: 'Software Development Intern',
    period: 'Summer 2022',
    location: 'Beaverton, OR',
    type: 'internship',
    description: 'Focused on driver behavior analysis using machine learning and API integration, contributing to traffic safety and analytics products.',
    achievements: [
      'Developed driver behavior analysis algorithms using Python',
      'Integrated external APIs for real-time data collection',
      'Created data visualization dashboards for behavior metrics',
      'Collaborated with cross-functional teams on product development',
      'Contributed to traffic safety research and analysis'
    ],
    technologies: ['Python', 'APIs', 'Machine Learning', 'Data Analysis', 'Visualization']
  }
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework: string[];
}

export const education: Education = {
  id: 'osu-cs',
  institution: 'Oregon State University',
  degree: 'Bachelor of Science',
  field: 'Computer Science',
  period: '2019 - 2023',
  location: 'Corvallis, OR',
  gpa: '3.7',
  honors: ['Dean\'s List', 'Magna Cum Laude'],
  relevantCoursework: [
    'Data Structures & Algorithms',
    'Database Systems',
    'Software Engineering',
    'Machine Learning',
    'Computer Networks',
    'Operating Systems',
    'Web Development',
    'Cybersecurity',
    'Statistics for Engineers'
  ]
};

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++', 'HTML/CSS']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Next.js', 'React', 'FastAPI', 'Node.js', 'TensorFlow', 'PyTorch', 'HuggingFace', 'Tailwind CSS']
  },
  {
    category: 'Databases & Cloud',
    items: ['PostgreSQL', 'MySQL', 'AWS (EC2, S3, IAM)', 'Docker', 'Vercel', 'Supabase']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git/GitHub', 'dbt', 'Prefect', 'OpenCV', 'MediaPipe', 'YOLOv8', 'Formstack', 'Salesforce']
  },
  {
    category: 'Concepts & Methods',
    items: ['REST APIs', 'Machine Learning', 'Data Analysis', 'ETL Pipelines', 'CI/CD', 'Agile/Scrum']
  }
];