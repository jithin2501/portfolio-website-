export const heroStats = {
  projects: '20+',
  experience: '1Y',
  commits: '2K',
  satisfaction: '100%',
  availability: 'Open for work',
  clients: '5+'
};

export const socialLinks = {
  github: 'https://github.com/jithin2501',
  linkedin: 'https://www.linkedin.com/in/jithin05/',
  email: 'jithinpjoji@gmail.com',
  phone: '+91 9061058123',
  location: 'Bengaluru, Kerala, India',
  whatsapp: 'https://wa.me/9061058123',
  instagram: 'https://www.instagram.com/jith_in05/',
};

export const aboutImage = '/me2.png';

export type Tech = { id: string; name: string; color: string; slug: string; desc: string; page: number };
export const skills: Tech[] = [
  { id: 'c', name: 'C', color: '#A8B9CC', slug: 'c', desc: 'Low-level, performant programming language.', page: 1 },
  { id: 'java', name: 'Java', color: '#007396', slug: 'java', desc: 'Robust, object-oriented applications.', page: 1 },
  { id: 'javascript', name: 'JavaScript', color: '#F7DF1E', slug: 'javascript', desc: 'Dynamic client-side behavior and interactive UI.', page: 1 },
  { id: 'python', name: 'Python', color: '#3776AB', slug: 'python', desc: 'Readable scripting and data-focused tooling.', page: 1 },
  { id: 'html', name: 'HTML5', color: '#E34F26', slug: 'html', desc: 'Semantic markup for modern, accessible websites.', page: 1 },
  { id: 'css', name: 'CSS3', color: '#1572B6', slug: 'css', desc: 'Responsive layouts, animations, and modern styling.', page: 1 },
  { id: 'react', name: 'React.js', color: '#61DAFB', slug: 'react', desc: 'Component-driven UI with declarative rendering.', page: 1 },
  { id: 'nextjs', name: 'Next.js', color: '#ffffff', slug: 'nextjs', desc: 'Fast React apps with routing and static rendering.', page: 1 }, { id: 'tailwind', name: 'Tailwind CSS', color: '#06B6D4', slug: 'tailwind', desc: 'Utility-first design for rapid UI styling.', page: 1 },
  { id: 'bootstrap', name: 'Bootstrap', color: '#7952B3', slug: 'bootstrap', desc: 'Responsive components and grid utilities.', page: 1 },
  { id: 'nodejs', name: 'Node.js', color: '#339933', slug: 'nodejs', desc: 'JavaScript runtime for server-side tools.', page: 1 },
  { id: 'express', name: 'Express.js', color: '#9ca3af', slug: 'express', desc: 'Minimal web framework for Node.js.', page: 1 },
  { id: 'ejs', name: 'EJS', color: '#A91E63', slug: 'ejs', desc: 'Templating engine for server-rendered HTML.', page: 2 },
  { id: 'mongodb', name: 'MongoDB', color: '#47A248', slug: 'mongodb', desc: 'Flexible document database for modern apps.', page: 2 },
  { id: 'postgresql', name: 'PostgreSQL', color: '#336791', slug: 'postgresql', desc: 'Reliable relational database for complex queries.', page: 2 },
  { id: 'restapi', name: 'REST API', color: '#FF6C37', slug: 'rest', desc: 'Design and consumption of RESTful services.', page: 2 },
  { id: 'git', name: 'Git', color: '#F05032', slug: 'git', desc: 'Version control and collaboration workflows.', page: 2 },
  { id: 'github', name: 'GitHub', color: '#181717', slug: 'github', desc: 'Repository hosting and collaboration platform.', page: 2 },
  { id: 'docker', name: 'Docker', color: '#2496ED', slug: 'docker', desc: 'Containerized development and deployment.', page: 2 },
  { id: 'aws', name: 'AWS', color: '#FF9900', slug: 'aws', desc: 'Cloud services for hosting and deployment.', page: 2 },
  { id: 'typescript', name: 'TypeScript', color: '#3178C6', slug: 'typescript', desc: 'Typed JavaScript for safer, scalable code.', page: 2 },
  { id: 'cloudinary', name: 'Cloudinary', color: '#2F2ACB', slug: 'cloudinary', desc: 'Image and media management in the cloud.', page: 2 },
  { id: 'wordpress', name: 'WordPress', color: '#21759B', slug: 'wordpress', desc: 'CMS and website building platform.', page: 2 },
  { id: 'shopify', name: 'Shopify', color: '#95BF47', slug: 'shopify', desc: 'E-commerce platform for online stores.', page: 2 }
];

type TechStackItem = { name: string; icon: string };

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  long_desc?: string;
  image: string;
  images?: string[];
  category?: string;
  role?: string;
  duration?: string;
  completed?: string;
  tools?: string;
  methodology?: string;
  features?: string[];
  tech_stack?: { name: string }[];
  learned?: string;
  featured?: string;
  live_url?: string;
  github_url?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: 'skydental',
    title: 'Sky Dental Hospital',
    category: 'Web Apps',
    description: 'A complete full-stack web application for Sky Dental Hospital built with React.js, Node.js, Express, MongoDB, and Cloudinary.',
    long_desc: 'A full-stack dental hospital website built with React.js, Node.js, Express, MongoDB, and Cloudinary. Features appointment booking, service management, patient reviews, and a secure admin dashboard.',
    image: '/project/dental.jpg',
    images: [
      '/project/dental.jpg',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=70',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=70',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=70',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=70'
    ],
    features: ['Appointment Booking', 'Service Management', 'Patient Reviews', 'Admin Dashboard'],
    tech_stack: [{ name: 'React' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }],
    featured: 'feature',
    live_url: 'http://skydentalhospital.in/',
    github_url: 'https://github.com/jithin2501/Sky-Dental-Hospital.git',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 'auxilium-school-varakkad',
    title: 'Auxilium School Varakkad ',
    category: 'Web Apps',
    description: 'Full-stack school management website with a responsive frontend, secure admin dashboard, MongoDB, Cloudinary, REST APIs, and email integration.',
    long_desc: 'Production-ready full-stack web application for Auxilium School Varakkad with a responsive website, secure admin dashboard, MongoDB, Cloudinary, REST APIs, and email notifications.',
    image: '/project/school.jpg',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=70',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=70'
    ],
    features: ['Sales metrics', 'Performance cards', 'Responsive layout', 'Dark mode design'],
    tech_stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Node.js' }, { name: 'MongoDB' }, { name: 'ejs' }, { name: 'bootstrap' }, { name: 'express' }, { name: 'restapi' }, { name: 'cloudinary' }, { name: 'wordpress' }],
    featured: 'feature',
    live_url: 'https://auxiliumschoolvarakkad.in/',
    github_url: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB']
  },
  {
    id: 'Mariya Homes',
    title: 'Mariya Homes',
    category: 'Web Apps',
    description: 'A full-stack real estate website featuring property listings, detailed pages, project portfolios, and a secure admin dashboard.',
    long_desc: 'A full-stack real estate web application built with React.js, Node.js, Express, and MongoDB, featuring property listings, project portfolios, contact forms, and a secure admin dashboard.',
    image: '/project/real_estate.webp',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=70',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=70'
    ],
    features: ['Color system', 'Typography scale', 'Reusable components', 'Design documentation'],
    tech_stack: [{ name: 'React' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }],
    featured: 'feature',
    live_url: 'https://mariahomes.in/',
    github_url: '#',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 'landing-page',
    title: 'Marketing Landing Page',
    category: 'Others',
    description: 'A conversion-optimized landing page with animated sections, testimonials, and call-to-action design.',
    long_desc: 'Built a responsive landing page designed for lead capture and presenting a polished product story. Includes mobile-first layout and fast load performance.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=70',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=70',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=70'
    ],
    features: ['Lead capture', 'Animated highlights', 'Responsive CTA', 'Performance optimized'],
    tech_stack: [{ name: 'Next.js' }, { name: 'CSS' }, { name: 'Responsive Design' }],
    featured: 'freelancing',
    live_url: '#',
    github_url: '#',
    tags: ['Landing Page', 'Marketing', 'Responsive']
  }
];

export type ExperienceItem = {
  id: string;
  dot_color: string;
  date_from: string;
  date_to: string;
  title: string;
  company: string;
  desc: string;
  tags: string[];
  location: string;
};

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    dot_color: '#818cf8',
    date_from: 'Mar 2026',
    date_to: 'May 2026',
    title: 'Full Stack Developer Intern',
    company: 'RP Studios',
    desc: 'Developed a MERN e-commerce platform with payment workflows and backend integrations.',
    tags: ['MERN', 'Payment', 'Backend', 'Frontend'],
    location: 'Hebbal, Bangalore'
  },
  {
    id: 'exp-2',
    dot_color: '#f59e0b',
    date_from: 'Sep 2025',
    date_to: 'Present',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    desc: 'Delivered custom web applications, landing pages, and UI updates for small businesses.',
    tags: ['Freelance', 'React', 'Next.js', 'Tailwind'],
    location: 'Bangalore, India'
  }
];

export const experienceSettings = {
  hero: {
    projects: '20+',
    experience: '1Y',
    commits: '2K',
    satisfaction: '99%',
    availability: 'Open for work',
    clients: '5+'
  }
};

export type AcademicEntry = {
  id: string;
  title: string;
  school: string;
  location: string;
  date_range: string;
  score: string;
  color_theme: string;
  icon_type: string;
};

export type AcademicSettings = {
  description: string;
  highlights: string[];
  stat1_label: string;
  stat1_value: string;
  stat2_label: string;
  stat2_value: string;
  stat3_label: string;
  stat3_value: string;
};

export const academics: AcademicEntry[] = [
  {
    id: 'acad-1',
    title: 'B.Tech in Computer Science & Engineering',
    school: 'Visvesvaraya Technological University',
    location: 'Belagavi, Karnataka',
    date_range: '2022 - 2026',
    score: '8.5 CGPA',
    color_theme: 'purple',
    icon_type: 'graduation'
  },
  {
    id: 'acad-2',
    title: 'Higher Secondary (12th)',
    school: 'St. Thomas HSS Thomapuram',
    location: 'Science (PCMB)',
    date_range: '2020 - 2022',
    score: '91%',
    color_theme: 'blue',
    icon_type: 'book'
  },
  {
    id: 'acad-3',
    title: 'Secondary (10th)',
    school: 'Auxilium School ICSE Varakkad',
    location: 'Kerala, India',
    date_range: '2019 - 2020',
    score: '80%',
    color_theme: 'green',
    icon_type: 'pencil'
  }
];

export const academicSettings: AcademicSettings = {
  description: 'A strong academic foundation that shaped my problem-solving mindset and passion for technology.',
  highlights: [
    'Consistent Academic Excellence',
    'Major Focus in Software Engineering',
    '10+ Semester Projects',
    'Dean\'s List Achiever',
    'Specialized in Full-Stack Development'
  ],
  stat1_label: 'B.Tech',
  stat1_value: '8.5 CGPA',
  stat2_label: '12th (PCMB)',
  stat2_value: '91%',
  stat3_label: '10th',
  stat3_value: '80%'
};

export const resumeFile = '/jithin_res.pdf';
