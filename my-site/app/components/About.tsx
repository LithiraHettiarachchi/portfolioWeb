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
                                I am a passionate Software Engineer with a deep focus on <strong className="text-white">Artificial Intelligence</strong> and <strong className="text-white">Machine Learning</strong>.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                My journey involves exploring the depths of neural networks, data science, and building intelligent applications that solve real-world problems.
                                I thrive on complex challenges and am constantly learning to stay at the cutting edge of technology.
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
                </motion.div>
            </div>
        </section>
    );
}
