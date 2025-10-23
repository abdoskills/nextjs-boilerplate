import React from 'react';
import Image from 'next/image'; 
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';

// FIX: Corrected import path to move up two levels (../../) to reach the root 'data' folder
import { Project } from '../data/projects'; 

interface ProjectCardProps {
  project: Project;
  variants: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  return (
    <motion.div 
      className="border-2 border-black bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
      variants={variants}
    >
      <div className="relative w-full h-40 bg-gray-200">
        
        {/* --- FIXED IMAGE SETUP --- */}
        <Image 
          src={project.image} 
          alt={`Screenshot of ${project.title}`} 
          fill={true} 
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* ------------------------- */}
        
      </div>
      <div className="p-4 border-t-2 border-black">
        <h3 className="text-xl font-bold font-sans mb-1">{project.title}</h3>
        <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
          {project.category}
        </span>
        <p className="mt-2 text-sm text-gray-800">{project.description}</p>
          {project.category === 'Fullstack' ? (
            <Link
              href={`/Projects/${project.slug}`}
              className="mt-3 inline-block text-black font-semibold border-b border-black hover:border-b-2"
            >
              View Project &rarr;
            </Link>
          ) : (
            <Link
              href={project.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-black font-semibold border-b border-black hover:border-b-2"
            >
              View Project &rarr;
            </Link>
          )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;