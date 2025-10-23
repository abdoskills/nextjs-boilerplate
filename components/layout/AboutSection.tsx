// components/layout/AboutSection.tsx

"use client";

import React from 'react';
import { motion, type Variants, type Transition } from 'framer-motion'; 
import Image from 'next/image';
import Link from 'next/link';
import { Playwrite_AU_TAS } from 'next/font/google'; // Added missing font import

// [Transition constants remain the same]
const easingTransition: Transition = { 
  duration: 0.6, 
  ease: "easeOut" 
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: easingTransition, 
  }
};


const AboutSection = () => {
  return (
    // ADDED ID for global navigation + structural classes
    <div id="about-section" className="bg-[#F5EEDF] text-black min-h-screen py-24 px-4 sm:px-12 relative overflow-hidden"> 
      
      {/* 2. Divider Extension (Kept for visual continuity) */}
      <div 
        className="absolute top-0 right-0 h-full w-1/2 
                   border-l-2 border-black 
                   transform origin-top-left skew-x-[-15deg] 
                   pointer-events-none" 
      >
        {/* Placeholder for optional right-side color layer if needed */}
      </div>
      
      {/* 3. About Content Wrapper */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10" 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
      >
        {/* LEFT COLUMN: The "About Us" Text Block */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-5xl font-extrabold mb-6 font-playwrite">
            About Me: The Fullstack Alchemist
          </h2>
          <p className="text-xl leading-relaxed">
            I&apos;m a Next.js fullstack developer dedicated to turning complex problems into elegant, scalable code. I specialize in building **high-performance applications** from database architecture (PostgreSQL/MongoDB) to pixel-perfect, interactive frontends (React/TypeScript).
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Photo and LinkedIn Link */}
        <motion.div 
            // Styling the photo container with high contrast borders
            className="w-full h-96 flex flex-col items-center justify-center p-6 border-4 border-black bg-white shadow-xl" 
            variants={fadeInUp}
        > 
            {/* ------------------- FINAL LOGO ONLY ------------------- */}
            <Image
                src="/logoman.jpg" // The main image path
                alt="logoman's Professional Headshot"
                width={200} 
                height={200} 
                className="mb-3 border-2 border-black object-contain" // Styled for standalone logo
            />
            {/* ------------------- END LOGO ONLY ------------------- */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;