"use client";

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically load the 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import('./Scene3D'), {
    loading: () => <div className="w-full h-full flex items-center justify-center text-primary/50 text-sm">Loading 3D Engine...</div>,
    ssr: false
});

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements - Kept for aesthetics under the 3D scene */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left space-y-6 z-20 pointer-events-none md:pointer-events-auto" // Ensure text is clickable
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-accent mb-4 pointer-events-auto">
                        Available for Hire
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight pointer-events-auto">
                        Hi, I'm <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                            Lithira Hettiarachchi
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 pointer-events-auto">
                        Software Engineer specializing in <span className="text-primary">AI</span> and <span className="text-secondary">Machine Learning</span>. Building the future with intelligent systems.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4 pointer-events-auto">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* 3D Scene Wrapper */}
                <div className="relative h-[300px] md:h-[600px] w-full flex items-center justify-center -z-0">
                    <div className="absolute inset-0 w-full h-full">
                        <Suspense fallback={null}>
                            <Scene3D />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}
