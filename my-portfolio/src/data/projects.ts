export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  download?: string;
  featured: boolean;
  category: 'fullstack' | 'ml' | 'automation' | 'consulting';
  impact?: string[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'fantasy-insights',
    title: 'Fantasy Insights',
    description: 'Production-grade fantasy football insights platform with FastAPI backend, Next.js frontend, and automated data pipeline.',
    longDescription: 'A comprehensive monorepo architecture featuring FastAPI backend with JWT authentication, ESPN API integration, SQLAlchemy ORM, Next.js 14 frontend with App Router and TypeScript, dbt data warehouse with Postgres adapter, and Prefect orchestration for automated data processing.',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'dbt', 'Prefect', 'TypeScript', 'Tailwind CSS', 'JWT', 'ESPN API', 'SQLAlchemy'],
    image: '/fantasy-insights-thumbnail.png',
    github: 'https://github.com/peterspr/fantasy-insights',
    demo: 'https://fantasy-insights.vercel.app',
    featured: true,
    category: 'fullstack',
    impact: [
      'Google OAuth integration for seamless user authentication',
      'Structured logging with comprehensive error tracking',
      'Automated ESPN data synchronization',
      'dbt seeds and macros for statistical projections',
      'Variance and shrinkage calculations for improved accuracy'
    ],
    challenges: [
      'Designing scalable monorepo architecture',
      'Implementing real-time ESPN API data sync',
      'Creating robust statistical projection models',
      'Optimizing database queries for large datasets'
    ],
    learnings: [
      'Advanced FastAPI patterns and best practices',
      'dbt modeling for analytics warehouses',
      'Prefect workflow orchestration',
      'Production deployment strategies'
    ]
  },
  {
    id: 'earnings-call-predictor',
    title: 'Earnings Call Stock Predictor',
    description: 'NLP pipeline with DistilBERT fine-tuning for ~63k earnings call transcripts with sentiment analysis and AWS deployment.',
    longDescription: 'Advanced natural language processing system that analyzes earnings call transcripts to predict stock price movements. Features custom DistilBERT fine-tuning, HuggingFace integration, comprehensive text classification, and scalable AWS infrastructure.',
    technologies: ['Python', 'DistilBERT', 'HuggingFace', 'FinBERT', 'AWS', 'PyTorch', 'Pandas', 'scikit-learn'],
    image: '/earnings-predictor-thumbnail.png',
    github: 'https://github.com/peterspr/earnings-call-predictor',
    featured: true,
    category: 'ml',
    impact: [
      'Processed 63,000+ earnings call transcripts',
      'Safe-harbor, Q&A, and general content classification',
      'FinBERT sentiment analysis integration',
      'Feature engineering for financial metrics',
      'Cloud-based model serving on AWS'
    ],
    challenges: [
      'Handling large-scale text preprocessing',
      'Fine-tuning transformer models for financial domain',
      'Managing computational resources efficiently',
      'Implementing robust model evaluation metrics'
    ],
    learnings: [
      'Advanced NLP techniques and transformer architectures',
      'Financial domain-specific model adaptation',
      'AWS ML services and deployment patterns',
      'Large-scale data processing pipelines'
    ]
  },
  {
    id: 'media-showcase',
    title: 'Netflix-Style Personal Media Showcase',
    description: 'Next.js + Tailwind + Framer Motion showcase with ~200 media items, slug-based routing, and optimized performance.',
    longDescription: 'A sophisticated media browsing experience inspired by Netflix, featuring dynamic content organization, smooth animations, lazy loading optimization, and detailed item pages with rich metadata display.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vercel'],
    image: '/media-showcase-thumbnail.png',
    github: 'https://github.com/peterspr/media-showcase',
    demo: 'https://media-showcase.vercel.app',
    featured: true,
    category: 'fullstack',
    impact: [
      '200+ media items with rich metadata',
      'Dynamic slug-based routing for detail pages',
      'Hover expansion effects and smooth transitions',
      'Optimized lazy loading for performance',
      'Responsive design across all devices'
    ],
    challenges: [
      'Implementing smooth animations without performance impact',
      'Managing large media collections efficiently',
      'Creating intuitive navigation patterns',
      'Optimizing bundle size and loading times'
    ],
    learnings: [
      'Advanced Framer Motion animation patterns',
      'Performance optimization techniques',
      'Modern React patterns and hooks',
      'Responsive design best practices'
    ]
  },
  {
    id: 'golf-swing-analyzer',
    title: 'Golf Swing Analyzer',
    description: 'Next.js frontend + FastAPI backend + YOLOv8 for golf club-head detection and pose estimation tracking.',
    longDescription: 'Computer vision application that analyzes golf swing videos using advanced machine learning models. Combines YOLOv8 for object detection, OpenCV for video processing, and MediaPipe for pose estimation to provide comprehensive swing analysis.',
    technologies: ['Next.js', 'FastAPI', 'YOLOv8', 'OpenCV', 'MediaPipe', 'Python', 'TypeScript'],
    image: '/golf-analyzer-thumbnail.png',
    github: 'https://github.com/peterspr/golf-swing-analyzer',
    featured: true,
    category: 'ml',
    impact: [
      'Real-time golf club-head detection in swing videos',
      'Full-body pose estimation and tracking',
      'Swing trajectory analysis and visualization',
      'Performance metrics and improvement suggestions',
      'Video processing pipeline optimization'
    ],
    challenges: [
      'Training custom YOLOv8 models for golf equipment',
      'Synchronizing multiple ML model outputs',
      'Real-time video processing performance',
      'Creating intuitive analysis visualizations'
    ],
    learnings: [
      'Computer vision model training and deployment',
      'Real-time video processing techniques',
      'Multi-modal AI system integration',
      'FastAPI for ML model serving'
    ]
  },
  {
    id: 'wellspring-order-management',
    title: 'WellSpring Order Management System',
    description: 'Nonprofit consulting project using JavaScript, Formstack, and Salesforce to optimize ordering workflows.',
    longDescription: 'Complete workflow redesign for a nonprofit organization that transformed their ordering system from a complex booking calendar to streamlined weekly pickups, dramatically reducing lead times and improving operational efficiency.',
    technologies: ['JavaScript', 'Formstack', 'Salesforce', 'Excel', 'Workflow Automation'],
    image: '/wellspring-thumbnail.png',
    featured: false,
    category: 'consulting',
    impact: [
      'Reduced lead times from months to 1 week',
      'Replaced complex booking calendar with fixed weekly pickups',
      'Improved order tracking and inventory management',
      'Enhanced stakeholder communication workflows',
      'Streamlined volunteer coordination processes'
    ],
    challenges: [
      'Understanding complex nonprofit operational constraints',
      'Integrating multiple legacy systems',
      'Training staff on new workflows',
      'Maintaining data integrity during transition'
    ],
    learnings: [
      'Nonprofit operations and constraints',
      'Change management in organizational settings',
      'Formstack and Salesforce integration patterns',
      'Business process optimization techniques'
    ]
  },
  {
    id: 'peak-consulting-automation',
    title: 'Peak Consulting Automation Projects',
    description: 'Forensic financial analysis tools and Python ETL automation that reduced manual reporting by 40%.',
    longDescription: 'Suite of automation tools developed for financial consulting firm, including forensic analysis workflows, automated ETL pipelines, advanced Excel modeling, and comprehensive reporting systems for complex financial investigations.',
    technologies: ['Python', 'Pandas', 'Excel VBA', 'SQL', 'Data Visualization', 'ETL Pipelines'],
    image: '/peak-consulting-thumbnail.png',
    featured: false,
    category: 'automation',
    impact: [
      'Reduced manual reporting work by 40%',
      'Automated complex financial data processing',
      'Created advanced Excel modeling templates',
      'Developed forensic analysis workflows',
      'Implemented comprehensive data validation systems'
    ],
    challenges: [
      'Working with sensitive financial data',
      'Creating robust error handling for edge cases',
      'Designing user-friendly interfaces for non-technical users',
      'Ensuring compliance with financial regulations'
    ],
    learnings: [
      'Financial forensics and investigation techniques',
      'Advanced Excel automation and VBA programming',
      'Data quality assurance in financial contexts',
      'Professional consulting and client communication'
    ]
  },
  {
    id: 'sca-toolkit',
    title: 'Side Channel Analysis Toolkit',
    description: 'Toolkit to analyze EM radiation from side-channel attacks, focusing on cryptographic leakage patterns.',
    longDescription: 'Academic research project focused on side-channel attack analysis, featuring custom tools for electromagnetic radiation analysis, signal processing, cryptographic leakage detection, and attack modeling for educational and research purposes.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Signal Processing', 'Cryptography', 'Data Analysis'],
    image: '/SCAProject_Thumbnail.png',
    github: 'https://github.com/peterspr/sca-toolkit',
    download: '/SCA_Presentaion.pptx',
    featured: false,
    category: 'ml',
    impact: [
      'Custom electromagnetic signal analysis tools',
      'Cryptographic leakage pattern detection',
      'Statistical analysis of side-channel vulnerabilities',
      'Educational materials for security research',
      'Comprehensive attack modeling framework'
    ],
    challenges: [
      'Understanding complex electromagnetic signal patterns',
      'Implementing statistical analysis for weak signals',
      'Creating educational materials for complex topics',
      'Balancing security research with responsible disclosure'
    ],
    learnings: [
      'Cryptographic security and side-channel analysis',
      'Signal processing and statistical analysis',
      'Hardware security concepts',
      'Research methodology and academic presentation'
    ]
  },
  {
    id: 'quizwiz',
    title: 'QuizWiz Web App',
    description: 'Full-stack trivia game using React and Node.js with REST API and interactive UI components.',
    longDescription: 'Interactive trivia application featuring real-time gameplay, question management system, user scoring, and comprehensive admin dashboard. Built with modern web technologies and RESTful API design principles.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'CSS3'],
    image: '/QuizWiz_Thumbnail.png',
    github: 'https://github.com/peterspr/QuizWiz',
    featured: false,
    category: 'fullstack',
    impact: [
      'Real-time multiplayer trivia gameplay',
      'Dynamic question and category management',
      'User authentication and scoring system',
      'Admin dashboard for content management',
      'Responsive design for mobile and desktop'
    ],
    challenges: [
      'Implementing real-time multiplayer functionality',
      'Designing scalable database schema',
      'Creating engaging user interface',
      'Managing game state across multiple clients'
    ],
    learnings: [
      'Full-stack JavaScript development',
      'Real-time web application patterns',
      'RESTful API design and implementation',
      'Database design and optimization'
    ]
  }
];

export const featuredProjects = projects.filter(project => project.featured);
export const projectsByCategory = (category: Project['category']) => 
  projects.filter(project => project.category === category);