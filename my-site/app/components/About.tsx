"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cpu } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        {/* Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center md:justify-end"
                        >
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/5 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                                <Image
                                    src="/profile.jpg"
                                    alt="Lithira Hettiarachchi"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-secondary/50 rounded-br-3xl"></div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                I am a software engineer focused on building scalable web and mobile systems, with a strong emphasis on AI-driven and data-informed solutions. I enjoy designing end-to-end applications that combine clean system architecture, reliable backend services, and intelligent decision-making through data and machine learning.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                I have hands-on experience developing backend APIs, full-stack web applications, and AI-integrated systems, using modern frameworks and cloud-based tools. I am organized, dependable, and comfortable taking ownership of features and delivering them within defined timelines.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                I approach problem-solving with a practical engineering mindset, applying algorithms, system design principles, and data analysis to solve real-world challenges. I communicate effectively within teams and adapt quickly to new technologies and requirements.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I am seeking a full-time software engineering role where I can contribute to building intelligent web and mobile products while continuously improving my skills in AI-driven system development.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Brain className="text-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI Research</h3>
                            <p className="text-gray-400 text-sm">
                                Exploring advanced algorithms and models to push the boundaries of what machines can learn and do.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Code className="text-secondary" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Software Dev</h3>
                            <p className="text-gray-400 text-sm">
                                Building robust, scalable, and efficient software solutions using modern tech stacks.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors group">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Cpu className="text-accent" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">ML Engineering</h3>
                            <p className="text-gray-400 text-sm">
                                Designing and deploying machine learning pipelines and models for production environments.
                            </p>
                        </div>
                    </div>

                    {/* My Journey Section */}
                    <div className="mt-32">
                        <h3 className="text-2xl md:text-3xl font-bold mb-20 text-center">My Journey</h3>

                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[18px] left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full"></div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                                {/* Step 1: High School */}
                                <div className="relative pt-0 md:pt-12 text-center md:text-left group">
                                    {/* Dot */}
                                    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-primary items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-primary)]">
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    </div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-2xl glass border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-3 opacity-10">
                                            <Brain size={40} className="text-primary" />
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-3 border border-primary/20">2019</span>
                                        <h4 className="text-lg font-bold text-white mb-2">High School</h4>
                                        <p className="text-sm font-semibold text-gray-300 mb-1">Lumbini College</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">Maths & Physics Background</p>
                                    </motion.div>
                                </div>

                                {/* Step 2: University */}
                                <div className="relative pt-0 md:pt-12 text-center md:text-left group">
                                    {/* Dot */}
                                    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-secondary items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-secondary)]">
                                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                                    </div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-2xl glass border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-3 opacity-10">
                                            <Cpu size={40} className="text-secondary" />
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-mono mb-3 border border-secondary/20">2021 - 2025</span>
                                        <h4 className="text-lg font-bold text-white mb-2">University</h4>
                                        <p className="text-sm font-semibold text-gray-300 mb-1">IIT / Westminster</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">BSc (Hons) Computer Science. Upper Second Class.</p>
                                    </motion.div>
                                </div>

                                {/* Step 3: Internship */}
                                <div className="relative pt-0 md:pt-12 text-center md:text-left group">
                                    {/* Dot */}
                                    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-accent items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-accent)]">
                                        <div className="w-3 h-3 rounded-full bg-accent"></div>
                                    </div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-2xl glass border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-3 opacity-10">
                                            <Code size={40} className="text-accent" />
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-mono mb-3 border border-accent/20">2023 - 2024</span>
                                        <h4 className="text-lg font-bold text-white mb-2">Internship</h4>
                                        <p className="text-sm font-semibold text-gray-300 mb-1">Sutra Technologies</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">Software Engineer Intern</p>
                                    </motion.div>
                                </div>

                                {/* Step 4: Current Role */}
                                <div className="relative pt-0 md:pt-12 text-center md:text-left group">
                                    {/* Dot */}
                                    <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-primary items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-primary)]">
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    </div>

                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-6 rounded-2xl glass border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-3 opacity-10">
                                            <Brain size={40} className="text-primary" />
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-3 border border-primary/20">Present</span>
                                        <h4 className="text-lg font-bold text-white mb-2">Current Role</h4>
                                        <p className="text-sm font-semibold text-gray-300 mb-1">Aurbyn</p>
                                        <p className="text-xs text-gray-400 leading-relaxed">Software Engineer</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
