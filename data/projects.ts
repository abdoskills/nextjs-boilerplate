import Image from 'next/image';

// --- INTERFACE DEFINITION (Correct TypeScript Syntax) ---
export interface Project {
  id: number;
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'UI/UX';
  title: string;
  description: string;
  image: string; // URL path to the image
  slug: string; // URL-friendly identifier for the dedicated detail page

  // Optional YouTube VOD URL. When present, project pages can embed this video.
  videoUrl?: string;

  // Optional per-lesson video URLs. Key is lesson number (1-based).
  lessonVideos?: { [lessonNumber: number]: string };

  liveLink?: string; 
  repoLink?: string; 
  challenge?: string; 
  results?: string; 
  techStack?: string[]; 
}

// --- DATA ARRAY (Correct JavaScript Object Syntax) ---
export const projectsData: Project[] = [
  {
    id: 1,
    category: 'Fullstack',
    title: 'E-commerce API Gateway',
    description: 'Built a scalable REST API using Node.js and MongoDB, handling product catalog and user authentication.',
    image: '/florian-olivo-4hbJ-eymZ1o-unsplash.jpg',
    slug: 'ecommerce-api-gateway', // CORRECT SLUG for internal navigation
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  // Example lesson-specific videos (lesson number -> YouTube URL)
  lessonVideos: {
    1: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    2: 'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
    3: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    4: 'https://www.youtube.com/watch?v=04854XqcfCY',
  },
    
    // Standard JavaScript key-value pairs for the data properties
    liveLink: 'https://demo.ecommerceapi.com', 
    repoLink: 'https://github.com/my/ecommerce-api',
    challenge: 'Architecting the microservices communication between payment and inventory.',
    results: 'Achieved 99.9% uptime and reduced order processing time by 300ms.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'AWS EC2'],
  },
  {
    id: 2,
    category: 'Frontend',
    title: 'Interactive Dashboard',
    description: 'A responsive React dashboard using Recharts for visualizing real-time metrics and data analytics.',
  image: '/pexels-kevin-ku-92347-577585.jpg',
    slug: 'interactive-dashboard', // FIX: Standardized slug
    
    liveLink: 'https://demo.dashboard.com', 
    repoLink: 'https://github.com/my/dashboard',
    challenge: 'Optimizing rendering performance for large datasets on low-power devices.',
    results: 'Improved data visualization load time by 50% using memoization techniques.',
    techStack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
  },
  {
    id: 3,
    category: 'Fullstack',
    title: 'Personal Blog CMS',
    description: 'Full-stack application with Next.js and PostgreSQL for content creation, editing, and deployment.',
  image: '/premium_photo-1661877737564-3dfd7282efcb.avif',
    slug: 'personal-blog-cms', // FIX: Standardized slug
  videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
  lessonVideos: {
    1: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    2: 'https://www.youtube.com/watch?v=L_jWHffIx5E',
    3: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    4: 'https://www.youtube.com/watch?v=eY52Zsg-KVI',
  },
    
    liveLink: 'https://myblog.vercel.app',
    repoLink: 'https://github.com/my/blog-cms',
    challenge: 'Designing a secure authentication and role management system (Admin/User).',
    results: 'Enabled authors to publish content 3x faster with the custom WYSIWYG editor.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth'],
  },
  {
    id: 4,
    category: 'UI/UX',
    title: 'Figma Design System',
    description: 'Designed a comprehensive component library in Figma for consistent branding across multiple platforms.',
  image: '/file.svg',
    slug: 'figma-design-system', // FIX: Standardized slug
    
    liveLink: 'https://www.figma.com/file/my-design-system', // Figma link serves as the demo
    challenge: 'Creating scalable, accessible components that adapt across desktop and mobile breakpoints.',
    results: 'Reduced design-to-development handover time by 40% using Storybook documentation.',
    techStack: ['Figma', 'Storybook', 'Design Tokens', 'Accessibility (WCAG)'],
  },
];