"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "AI Image Generator",
        description: "A deep learning model capable of generating realistic images from text descriptions using GANs.",
        tags: ["Python", "PyTorch", "GANs", "React"],
        github: "#",
        demo: "#",
        image: "/project1.jpg", // Placeholder
    },
    {
        title: "Predictive Analytics Dashboard",
        description: "Real-time dashboard for visualizing and predicting stock market trends using LSTM networks.",
        tags: ["Python", "TensorFlow", "D3.js", "Flask"],
        github: "#",
        demo: "#",
        image: "/project2.jpg", // Placeholder
    },
    {
        title: "Natural Language Chatbot",
        description: "Customer support chatbot built with Transformer models, capable of context-aware conversations.",
        tags: ["NLP", "HuggingFace", "FastAPI", "Next.js"],
        github: "#",
        demo: "#",
        image: "/project3.jpg", // Placeholder
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400">Showcasing my work in AI and Software Engineering</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
                        >
                            <div className="h-48 bg-gray-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                {/* Image placeholder - use a gradient for now if image missing */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
