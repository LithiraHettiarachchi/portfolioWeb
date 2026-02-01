"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left space-y-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-accent mb-4">
                        Available for Hire
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Hi, I'm <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                            Lithira Hettiarachchi
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
                        Software Engineer specializing in <span className="text-primary">AI</span> and <span className="text-secondary">Machine Learning</span>. Building the future with intelligent systems.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
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

                {/* Hero Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-lg aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
                        <Image
                            src="/hero-graphic.png"
                            alt="AI Futuristic Graphic"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
