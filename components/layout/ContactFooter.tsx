// components/layout/ContactFooter.tsx

"use client";

import React, { useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';


// -------------------- SOCIAL DATA --------------------
const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/abdoskills/' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://www.tiktok.com/@abdoskills1' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdoskills-hassan-42296a38b/' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/abdoskills' },
    { name: 'Phone', icon: FaWhatsapp, href: 'tel:01098857028' },
];

const ContactFooter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Email submitted: ${email}`);
        alert(`Thank you for your interest! We&apos;ll contact you at ${email}`);
        setEmail('');
    };

    return (
        <footer id="contact-section" className="bg-[#F5EEDF] text-black py-16 px-4 sm:px-12 border-t-2 border-black">
            <div className="max-w-6xl mx-auto">
                
                <p className="text-lg mb-8 font-playwrite text-center">
                    Welcome to our website! Let&apos;s build something amazing together.
                </p>

                {/* Contact Rectangle Container */}
                <div className="border-4 border-black p-8 md:p-12 bg-white shadow-lg">
                    <h3 className="text-4xl font-extrabold font-sans mb-4">
                        Get In Touch
                    </h3>
                    <p className="mb-6 text-gray-700">
                        Leave your email below or connect with us directly.
                    </p>

                    {/* Email Input Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-10">
                        <input
                            type="email"
                            placeholder="Enter your email to contact us"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-grow p-3 border-2 border-black bg-gray-50 focus:outline-none focus:border-blue-500 text-lg"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white p-3 border-2 border-black text-lg font-bold hover:bg-gray-800 transition-colors"
                        >
                            Send
                        </button>
                    </form>

                    {/* Social Icons Section */}
                    <div className="border-t border-gray-300 pt-6">
                        <h4 className="text-xl font-bold mb-4">How to Reach Us:</h4>
                        <div className="flex space-x-6 justify-center md:justify-start mb-6"> {/* ADDED justify-center */}
                            {socialLinks.map(link => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black text-3xl hover:text-gray-600 transition-colors"
                                    aria-label={`Visit our ${link.name} profile`}
                                >
                                    <link.icon /> 
                                </a>
                            ))}
                        </div>
                        
                        {/* --- ADDED: COPYRIGHT TEXT --- */}
                        <div className="pt-4 border-t border-gray-300 text-center">
                            <p className="text-sm text-gray-600">
                                Copyright 2025 &copy; Abdelrahman Mohamed Hassan
                            </p>
                        </div>
                        {/* ----------------------------- */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;