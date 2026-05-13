import { Project, SkillCategory, Education, Internship, Activity } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/Shashank-0609',
  linkedin: 'https://www.linkedin.com/in/shashankell/',
  email: 'shashanke0609@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'pawmitra',
    title: 'PawMitra',
    description: 'A web application that helps pet owners find safe and trusted hosts for their pets while they travel.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    features: [
      'Verified Host System using GHMC certificate verification',
      'Safe home-based pet hosting',
      'Trust-focused system for pet owners',
      'User-friendly interface'
    ],
    githubUrl: 'https://github.com/Shashank-0609/PawMitra',
    liveUrl: 'https://pawmitra.online',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'jobfinder',
    title: 'Home Job Finder',
    description: 'A platform designed to help homemakers find flexible part-time and work-from-home opportunities.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Employer job posting system',
      'Easy opportunity browsing',
      'Simple communication system',
      'Beginner-friendly UI'
    ],
    githubUrl: 'https://github.com/Shashank-0609',
    liveUrl: 'https://github.com/Shashank-0609',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Full Stack Development',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Firebase', level: 75 },
      { name: 'Responsive Design', level: 95 }
    ]
  },
  {
    title: 'Programming & Databases',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Data Structures', level: 75 }
    ]
  },
  {
    title: 'Data Analytics & Visualization',
    skills: [
      { name: 'Advanced Excel', level: 90 },
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 80 },
      { name: 'Dashboards', level: 85 }
    ]
  },
  {
    title: 'AI & Productivity Tools',
    skills: [
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Vibe Coding', level: 85 },
      { name: 'Canva', level: 80 },
      { name: 'AI workflows', level: 90 }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Mallareddy Engineering College, Hyderabad',
    degree: 'B.Tech in Computer Science Engineering',
    duration: 'Aug 2023 – May 2027',
    score: 'CGPA: 8.87'
  },
  {
    institution: 'Trividyaa Junior College, Hyderabad',
    degree: 'Intermediate (MPC)',
    duration: 'Apr 2021 – May 2023',
    score: 'Percentage: 98.5%'
  },
  {
    institution: 'Sri Chaitanya School, Hyderabad',
    degree: 'SSC',
    duration: '2020 – 2021',
    score: 'CGPA: 9.9/10'
  }
];

export const INTERNSHIP: Internship = {
  company: 'Placemantra',
  role: 'Front End Development Intern',
  duration: 'June 2025 – August 2025',
  description: 'Completed a two-month professional training program focused on frontend development and real-world project structuring.',
  highlights: [
    'Learned practical website development workflows',
    'Applied responsive design principles',
    'Built project architectures used in industry environments'
  ]
};

export const ACTIVITIES: Activity[] = [
  { role: 'Student Coordinator', organization: 'VISHESH' },
  { role: 'Technical Student Coordinator Lead', organization: 'ADYANT CSE Community' },
  { role: 'Technical Student Coordinator', organization: 'SAC' },
  { role: 'Technical Coordinator', organization: 'IGNITE-2K26 24Hrs AI Hackathon' }
];
