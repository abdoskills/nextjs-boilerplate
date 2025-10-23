// components/Projects/ProjectsSection.tsx

"use client";

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
// FIX: Corrected imports assuming ProjectCard is in the same directory (./)
import ProjectCard from '../ProjectCard';
// FIX: Corrected import assuming data folder is two levels up (../../)
import { projectsData, Project } from '../../data/projects'; 


// --- FIX: DEFINITION OF TABS ARRAY RESTORED ---
const tabs = ['All', 'Fullstack', 'Frontend', 'Backend', 'UI/UX'];
// ----------------------------------------------


// Animation for the cards (These are for the inner staggering)
const cardContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Animation for the entire section container (Scroll-In)
const sectionEnter: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        } 
    },
};


const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | Project['category']>('All');

  const filteredProjects = projectsData.filter(project => 
    activeTab === 'All' ? true : project.category === activeTab
  );

  return (
    // Added ID for smooth scrolling from the Hero section
    <div className="bg-[#F5EEDF] text-black py-24 px-4 sm:px-12 min-h-screen" id="projects-section"> 
      
      <motion.div
        className="max-w-6xl mx-auto"
        variants={sectionEnter}
        initial="hidden"
        whileInView="visible" // Triggers animation on scroll
        viewport={{ once: true, amount: 0.1 }} 
      >
        <h2 className="text-5xl font-extrabold font-sans mb-10">
          My Work
        </h2>

        {/* --- Tab Navigation --- */}
        <div className="flex space-x-4 mb-10 border-b-2 border-black pb-2">
          {tabs.map(tab => ( // <-- 'tabs' is now defined and recognized
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'All' | Project['category'])}
              className={`px-4 py-2 font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-black text-white border-2 border-black'
                  : 'text-black hover:bg-gray-200 border-2 border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- Project Cards Grid --- */}
        <motion.div
          key={activeTab} // Key changes to re-trigger the card staggering animation when the tab is switched
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainer}
          initial="hidden"
          animate="visible" 
        >
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              variants={cardItem} // Applies the smooth card stagger animation
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;