export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Hybrid';
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  category: string;
  postedDate: string;
  applicationDeadline: string;
  experienceLevel: 'Entry' | 'Mid' | 'Senior' | 'Executive';
  companyLogo?: string;
  tags: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'We are looking for a passionate Senior Full Stack Developer to join our innovative team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      '5+ years of experience in full stack development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Strong understanding of database design and optimization',
      'Experience with microservices architecture'
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams',
      'Mentor junior developers',
      'Participate in code reviews and architectural decisions',
      'Optimize application performance and scalability'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Unlimited PTO policy'
    ],
    category: 'Technology',
    postedDate: '2024-01-10',
    applicationDeadline: '2024-02-15',
    experienceLevel: 'Senior',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'Full Stack']
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Creative Studios Inc',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'Join our creative team as a UX/UI Designer and help shape the future of digital experiences. Work on exciting projects for Fortune 500 clients.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, and Adobe Creative Suite',
      'Strong portfolio showcasing design thinking process',
      'Understanding of responsive design principles',
      'Experience with user research and usability testing'
    ],
    responsibilities: [
      'Create user-centered designs for web and mobile applications',
      'Conduct user research and usability testing',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve design systems',
      'Present design concepts to stakeholders'
    ],
    benefits: [
      'Creative and collaborative work environment',
      'Health and wellness benefits',
      'Flexible schedule and hybrid work options',
      'Professional development opportunities',
      'Modern office with design tools and resources'
    ],
    category: 'Design',
    postedDate: '2024-01-08',
    applicationDeadline: '2024-02-10',
    experienceLevel: 'Mid',
    tags: ['Figma', 'UI/UX', 'Design Systems', 'User Research', 'Mobile Design']
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'AI Innovations Lab',
    location: 'Remote',
    type: 'Remote',
    salary: '$100,000 - $140,000',
    description: 'We are seeking a talented Data Scientist to join our AI research team. You will work on cutting-edge machine learning projects and contribute to breakthrough innovations.',
    requirements: [
      'PhD or Masters in Data Science, Statistics, or related field',
      'Strong programming skills in Python and R',
      'Experience with machine learning frameworks (TensorFlow, PyTorch)',
      'Expertise in statistical analysis and modeling',
      'Strong communication skills for presenting findings'
    ],
    responsibilities: [
      'Develop and implement machine learning models',
      'Analyze large datasets to extract actionable insights',
      'Collaborate with engineering teams on model deployment',
      'Present findings to technical and non-technical stakeholders',
      'Stay current with latest AI/ML research and trends'
    ],
    benefits: [
      '100% remote work flexibility',
      'Competitive compensation with stock options',
      'Conference attendance and learning budget',
      'Top-tier hardware and software tools',
      'Health and wellness stipend'
    ],
    category: 'Data Science',
    postedDate: '2024-01-12',
    applicationDeadline: '2024-02-20',
    experienceLevel: 'Senior',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Statistics', 'Remote']
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'Growth Marketing Pro',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$70,000 - $95,000',
    description: 'Lead our marketing initiatives and drive growth for our expanding SaaS platform. Perfect opportunity for a marketing professional ready to make a significant impact.',
    requirements: [
      '4+ years of digital marketing experience',
      'Experience with marketing automation tools',
      'Strong analytical skills and data-driven approach',
      'Content creation and campaign management experience',
      'B2B SaaS marketing experience preferred'
    ],
    responsibilities: [
      'Develop and execute comprehensive marketing strategies',
      'Manage multi-channel marketing campaigns',
      'Analyze campaign performance and optimize ROI',
      'Collaborate with sales team on lead generation',
      'Oversee content creation and brand messaging'
    ],
    benefits: [
      'Performance-based bonuses',
      'Professional development budget',
      'Flexible working arrangements',
      'Health and dental insurance',
      'Team building events and company retreats'
    ],
    category: 'Marketing',
    postedDate: '2024-01-05',
    applicationDeadline: '2024-02-05',
    experienceLevel: 'Mid',
    tags: ['Digital Marketing', 'SaaS', 'Analytics', 'Content Marketing', 'B2B']
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudFirst Technologies',
    location: 'Austin, TX',
    type: 'Hybrid',
    salary: '$95,000 - $130,000',
    description: 'Join our DevOps team to build and maintain scalable infrastructure for our cloud-native applications. Work with cutting-edge technologies in a collaborative environment.',
    requirements: [
      '3+ years of DevOps or infrastructure experience',
      'Strong knowledge of containerization (Docker, Kubernetes)',
      'Experience with CI/CD pipelines and automation',
      'Cloud platform expertise (AWS, Azure, or GCP)',
      'Infrastructure as Code experience (Terraform, Ansible)'
    ],
    responsibilities: [
      'Design and maintain CI/CD pipelines',
      'Manage cloud infrastructure and deployments',
      'Implement monitoring and alerting systems',
      'Collaborate with development teams on deployment strategies',
      'Ensure security and compliance standards'
    ],
    benefits: [
      'Hybrid work model with flexible hours',
      'Competitive salary with annual bonuses',
      'Comprehensive benefits package',
      'Technology allowance for home office',
      'Professional certification support'
    ],
    category: 'DevOps',
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-25',
    experienceLevel: 'Mid',
    tags: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'CI/CD']
  },
  {
    id: '6',
    title: 'Product Manager',
    company: 'InnovateNow Startups',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$110,000 - $145,000',
    description: 'Lead product strategy and development for our next-generation productivity platform. Work directly with founders and cross-functional teams in a fast-paced startup environment.',
    requirements: [
      '5+ years of product management experience',
      'Experience with agile development methodologies',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
      'B2B SaaS product experience preferred'
    ],
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Work closely with engineering, design, and marketing teams',
      'Conduct market research and competitive analysis',
      'Gather and prioritize product requirements',
      'Analyze product metrics and user feedback'
    ],
    benefits: [
      'Equity stake in growing startup',
      'Unlimited vacation policy',
      'Health, dental, and vision coverage',
      'Catered meals and office perks',
      'Learning and development stipend'
    ],
    category: 'Product',
    postedDate: '2024-01-18',
    applicationDeadline: '2024-03-01',
    experienceLevel: 'Senior',
    tags: ['Product Management', 'Agile', 'SaaS', 'Strategy', 'Leadership']
  }
];

export const jobCategories = [
  'Technology',
  'Design',
  'Data Science',
  'Marketing',
  'DevOps',
  'Product',
  'Sales',
  'Finance',
  'HR',
  'Operations'
];

export const experienceLevels = ['Entry', 'Mid', 'Senior', 'Executive'];
export const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'];