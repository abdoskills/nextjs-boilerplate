// app/projects/[slug]/page.tsx

"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { projectsData, Project } from '../../../data/projects';
import { Playwrite_AU_TAS } from 'next/font/google';

// --- FONT DEFINITION ---
const playwrite = Playwrite_AU_TAS({ weight: 'variable' });

// Helper functions for YouTube embedding remain outside the component

const getYouTubeId = (url?: string | null) => {
    if (!url) return null;
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([\w-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([\w-]{11})/,
    ];
    for (const re of patterns) {
        const m = url.match(re);
        if (m && m[1]) return m[1];
    }
    return null;
};

const getYouTubeEmbed = (url?: string | null) => {
    const id = getYouTubeId(url);
    return id ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1` : null;
};

// -----------------------------------------------------------------
// --- Lesson Accordion Component ---
// -----------------------------------------------------------------

interface LessonProps {
    lessonNumber: number;
    title: string;
    details?: string;
    techStack?: string[];
    liveLink?: string;
    repoLink?: string;
    // now accept an onToggle that receives the lesson number
    showVideo?: boolean;
    onToggleShowVideo?: (lessonNumber: number) => void;
}

const LessonAccordion: React.FC<LessonProps> = ({ lessonNumber, title, details, techStack, liveLink, repoLink, showVideo, onToggleShowVideo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contentVariants = {
        open: { height: "auto", opacity: 1, paddingTop: 16, paddingBottom: 16 },
        collapsed: { height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }
    };

    return (
        <div className="border-2 border-black mb-4 overflow-hidden rounded-md">
            
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-right p-4 text-xl font-bold transition-colors duration-300 flex justify-between items-center ${
                    isOpen ? 'bg-black text-white' : 'bg-white hover:bg-gray-100 text-black'
                }`}
            >
                <span className="text-left font-semibold text-sm mr-4">
                    {`SECTION ${lessonNumber}`}
                </span>
                <span className="flex-grow text-right pr-4">{title}</span>
                
                <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-auto text-2xl"
                >
                    ▼
                </motion.span>
            </button>
            
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={contentVariants}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="p-4 bg-gray-50 text-left border-t-2 border-black"
                    >
                        {/* 1. Video Toggle Button (Only in Section 1) */}
                        {onToggleShowVideo && (
                            <div className="mb-4">
                                <button
                                    onClick={() => onToggleShowVideo(lessonNumber)}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
                                >
                                    {showVideo ? '← Show Screenshot' : '▶ Open Video Overview'}
                                </button>
                            </div>
                        )}
                        
                        {/* Display Detailed Text */}
                        {details && <p className="text-lg leading-relaxed mb-4 whitespace-pre-wrap">{details}</p>} 

                        {/* Tech Stack (Lesson 2 & 3 content logic remains) */}
                        {techStack && techStack.length > 0 && (
                            <div className="pt-2 border-t border-gray-300 mt-4">
                                <span className="font-bold block mb-2">Tech Stack Used:</span>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="text-xs font-semibold px-3 py-1 border border-black bg-yellow-100 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* External Links (Lesson 4 logic remains) */}
                        {lessonNumber === 4 && (
                            <div className="flex flex-col space-y-3 mt-4 pt-2 border-t border-gray-300">
                                <h4 className="font-bold">External Links:</h4>
                                {/* ... (Link rendering logic) ... */}
                            </div>
                        )}
                        
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


// -----------------------------------------------------------------
// --- PROJECT DETAIL PAGE COMPONENT ---
// -----------------------------------------------------------------

interface ProjectDetailPageProps { params: { slug: string }; }

const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
    const { slug } = params;
    const project = projectsData.find((p: Project) => p.slug === slug);

    // Local UI state to track which lesson's video is active (0 = none)
    const [activeLesson, setActiveLesson] = useState<number>(0);
    const toggleLessonVideo = (lessonNumber: number) => {
        setActiveLesson(curr => (curr === lessonNumber ? 0 : lessonNumber));
    };

    if (!project) {
        return <div>Project not found</div>;
    }
    
    // Note: prefer a dedicated `videoUrl` property on the project (you can add this
    // in `data/projects.ts`), otherwise we fall back to `liveLink` if it contains
    // a YouTube URL. We compute the embed at render-time so toggling the UI
    // provides immediate feedback.


    return (
        <div className="min-h-screen bg-[#F5EEDF] text-black">

            {/* --- REFINED HEADER/NAVIGATION BAR --- */}
            <div className="p-4 md:p-6 border-b-2 border-black bg-white">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    
                    <Link href="/" className="text-lg font-semibold inline-block border-b-2 border-black hover:text-red-600 transition-colors">
                        &larr; Back to Portfolio
                    </Link>

                    <h1 className={`text-xl md:text-3xl font-extrabold ${playwrite.className}`}>{project.title}</h1>
                </div>
            </div>

            {/* --- MAIN CONTENT LAYOUT --- */}
            <div className="max-w-6xl mx-auto mt-10 p-4">

                {/* PROJECT DESCRIPTION BOX */}
                <div className="border-4 border-black bg-white p-8 mb-12 rounded-lg">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">{project.category} Case Study</h3>
                    <p className="mt-4 text-lg">{project.description}</p>
                </div>

                {/* --- IMAGE/VIDEO TOGGLE CONTAINER --- */}
                <div className="relative w-full h-[30rem] md:h-[40rem] bg-gray-700 border-4 border-black mb-12 flex items-center justify-center rounded-lg overflow-hidden">
                    
                    {/* Conditional Rendering: Show Video if showVideo is true. Compute source dynamically. */}
                    {(() => {
                        // Determine the current video source using lessonVideos, videoUrl, then liveLink
                        // Access lessonVideos via a safe typed cast
                        const p = project as Project & { lessonVideos?: Record<number, string>; videoUrl?: string };
                        const lessonSrc = p.lessonVideos?.[activeLesson] || null;
                        const source = lessonSrc || p.videoUrl || p.liveLink || null;
                        const embed = getYouTubeEmbed(source);

                        if (activeLesson !== 0) {
                            if (embed) {
                                return (
                                    <iframe
                                        src={embed}
                                        title={`Video for ${project.title} - Lesson ${activeLesson}`}
                                        className="w-full h-full absolute inset-0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                );
                            }
                            return (
                                <div className="p-6 text-center">
                                    <p className="text-white text-lg mb-2">No embeddable YouTube video found for this lesson.</p>
                                    <p className="text-sm text-gray-200">Add a lesson video to this project&rsquo;s data (e.g. <code>lessonVideos</code>), or set <code>videoUrl</code> / <code>liveLink</code> to a YouTube URL.</p>
                                </div>
                            );
                        }

                        // Default: show project image if available
                        if (project.image && project.image !== '') {
                            return (
                                <Image
                                    src={project.image}
                                    alt={`Main image for ${project.title}`}
                                    fill={true}
                                    style={{ objectFit: 'contain' }}
                                    sizes="100vw"
                                />
                            );
                        }

                        return <span className="text-3xl text-white">No primary image/video available for this project</span>;
                    })()}
                </div>

                {/* --- MODULES / LESSONS SECTION (Detailed Breakdown) --- */}
                <h2 className="text-4xl font-extrabold mb-6 text-right border-b-4 border-black inline-block pb-1">
                    Project Breakdown
                </h2>

                {/* The Accordion List */}
                <div className="space-y-4">

                    <LessonAccordion 
                        lessonNumber={1} 
                        title="The Core Challenge & Architecture" 
                        details={project.challenge || "Detail on the primary technical hurdles and the architectural decisions made."} 
                        showVideo={activeLesson === 1}
                        onToggleShowVideo={toggleLessonVideo} // Passed to Section 1
                    />
                    
                    <LessonAccordion 
                        lessonNumber={2} 
                        title="Technology Stack & Implementation" 
                        details="A breakdown of the key programming languages, libraries, and tools used to build the solution." 
                        techStack={project.techStack}
                        showVideo={activeLesson === 2}
                        onToggleShowVideo={toggleLessonVideo}
                    />
                    <LessonAccordion 
                        lessonNumber={3} 
                        title="Final Results & Key Takeaways" 
                        details={project.results || "Summary of the achieved metrics, performance gains, and lessons learned from the project."} 
                        showVideo={activeLesson === 3}
                        onToggleShowVideo={toggleLessonVideo}
                    />
                    <LessonAccordion 
                        lessonNumber={4} 
                        title="External Links & Source Code" 
                        details="Access the live demo or the full source code on GitHub." 
                        liveLink={project.liveLink} 
                        repoLink={project.repoLink}
                        showVideo={activeLesson === 4}
                        onToggleShowVideo={toggleLessonVideo}
                    />

                </div>

            </div>
        </div>
    );
};

export default ProjectDetailPage;