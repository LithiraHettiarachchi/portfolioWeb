"use client";

import { motion } from "framer-motion";
import { Brain, Code, Cpu } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-12">
                        I am a passionate Software Engineer with a deep focus on <strong className="text-white">Artificial Intelligence</strong> and <strong className="text-white">Machine Learning</strong>.
                        My journey involves exploring the depths of neural networks, data science, and building intelligent applications that solve real-world problems.
                        I thrive on complex challenges and am constantly learning to stay at the cutting edge of technology.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors">
                            <Brain className="text-primary mb-4" size={32} />
                            <h3 className="text-xl font-semibold mb-2">AI Research</h3>
                            <p className="text-gray-400 text-sm">
                                Exploring advanced algorithms and models to push the boundaries of what machines can learn and do.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors">
                            <Code className="text-secondary mb-4" size={32} />
                            <h3 className="text-xl font-semibold mb-2">Software Dev</h3>
                            <p className="text-gray-400 text-sm">
                                Building robust, scalable, and efficient software solutions using modern tech stacks.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors">
                            <Cpu className="text-accent mb-4" size={32} />
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
