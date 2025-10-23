"use client"; 

import React from 'react';
import { motion, type Transition, type Variants } from 'framer-motion';
import { Playwrite_AU_TAS } from 'next/font/google'; // <--- ADDED FONT IMPORT
import Header from '../components/layout/Header';
import PerspectiveGrid from '../components/Hero/PerspectiveGrid';
import AboutSection from '../components/layout/AboutSection';
import ProjectsSection from './Projects/ProjectsSections';
import ContactFooter from '../components/layout/ContactFooter';
import Image from 'next/image';
import Link from 'next/link';
// -------------------- FONT DEFINITION --------------------
const playwrite = Playwrite_AU_TAS({
  weight: 'variable', 
});

// -------------------- ANIMATION CONSTANTS --------------------
const springTransition: Transition = { type: "spring", stiffness: 50, damping: 15 };
const contentVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } } };
const leftItem: Variants = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: springTransition } };
const rightItem: Variants = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: springTransition } };
const dividerAnim: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } } };
const threeDBoxVariant: Variants = {
    hidden: { opacity: 0, rotateX: 90, y: 50 },
    visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, rotateY: 5, rotateX: 5, transition: { type: "spring", stiffness: 400, damping: 10 } }
};


// -------------------- HOMEPAGE COMPONENT --------------------

const HomePage = () => {

  return (
    <div className="min-h-screen">
      
      <div className="pb-1"> 
        <Header />
        
        {/* -------------------- TOP SECTION (First View) -------------------- */}
        <PerspectiveGrid>
          <motion.div 
            className="grid grid-cols-12 gap-6 h-full relative"
            variants={contentVariants} 
            initial="hidden"
            animate="visible"
          >
            
            {/* LEFT SIDE: Headline & Descriptive Content (8/12 columns) */}
            <motion.div className="col-span-12 md:col-span-8 flex flex-col justify-between" variants={leftItem}>
              
              <h1 className={`text-7xl leading-tight text-black ${playwrite.className}`}>
                Dive Into The <br/> World Of Coding!!
              </h1>

              {/* 3D-like Description Box */}
              <motion.div
                className="relative w-full h-1/2 p-8 border-4 border-black bg-white/70 text-black flex flex-col justify-center overflow-hidden"
                variants={threeDBoxVariant} 
                whileHover="hover"
                style={{ perspective: 1000 }}
              >
                <h3 className="text-3xl font-bold mb-3">What You Will Learn</h3>
                <p className="text-lg mb-4">
                  Master Next.js, TypeScript, and Node.js. Build scalable, high-performance backends and beautiful, responsive frontends from scratch.
                </p>
                <h3 className="text-3xl font-bold mb-3 mt-4">Why Choose Us?</h3>
                <p className="text-lg">
                  We blend deep technical architecture (Backend) with creative, high-contrast design (Frontend) for unique, industry-ready solutions.
                </p>
                {/* FIX 3: SCROLL LINK IMPLEMENTED */}
                <Link 
                  href="#projects-section" // Link to the section ID
                  scroll={false}           // Important: Disable default jump
                  className="mt-4 px-6 py-2 bg-black text-white font-semibold border-2 border-black hover:bg-gray-700 transition-colors"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE: Logo (4/12 columns) */}
            <motion.div className="col-span-12 md:col-span-4 flex flex-col items-center justify-center space-y-8" variants={rightItem}>
              
              {/* Logo Placeholder Container (Styling the surrounding area) */}
              <motion.div 
                // ADJUSTED: Increased size and restored the styling for visibility
                className="" 
                variants={rightItem}
              >
                {/* Logo Image Component */}
                <Image
                  src="/logotop1.png" 
                  alt="Creative Logo"
                  width={300}  // INCREASED SIZE
                  height={300} // INCREASED SIZE
                  // Removed unnecessary border classes from Image itself for cleaner rendering
                />
              </motion.div>
              
              {/* DELETED: The box under the logo is REMOVED */}
              
            </motion.div>
              
              {/* CTABox (positioning div remains) */}
              <motion.div 
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.5 }}
              > 
              </motion.div>

            </motion.div>

        </PerspectiveGrid>
        
        {/* Horizontal Dividers and Sections */}
        <motion.div className="w-full h-2 bg-black border-y border-black" variants={dividerAnim} initial="hidden" animate="visible" />
        
        <AboutSection />
        
        <motion.div className="w-full h-2 bg-black border-y border-black" variants={dividerAnim} initial="hidden" animate="visible" />
        
        <ProjectsSection />
        
        <motion.div className="w-full h-1 bg-black" variants={dividerAnim} initial="hidden" animate="visible" />
        
      </div> 
      
      {/* -------------------- FIXED FOOTER SECTION -------------------- */}
      <ContactFooter />
      
    </div>
  );
};

export default HomePage;