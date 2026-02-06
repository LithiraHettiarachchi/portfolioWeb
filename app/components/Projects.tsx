"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Olos Chat",
        description: "An AI-powered conversational assistant designed to plug into websites and applications.",
        tags: ["Node.js", "Python", "VectorDB", "Next.js"],
        github: "https://github.com/LithiraHettiarachchi/OlosChat",
        demo: "#",
        image: "https://i.ibb.co/4RN4xS1H/oloschat.jpg",
    },
    {
        title: "GridSense",
        description: "An Analysis of Machine Learning and Time Series for Predicting EV Charging Demand with Traffic and Weather Data.",
        tags: ["Python", "Time-Series Modeling", "FastAPI", "Integration"],
        github: "https://github.com/LithiraHettiarachchi/gridSense",
        image: "https://i.ibb.co/XZLtsqyP/gridsense.jpg",
    },
    {
        title: "AgriVerse",
        description: "A smart paddy production prediction system for Sri Lankan Market.",
        tags: ["Python", "Time-Series Modeling", "FastAPI", "JavaScript"],
        github: "https://github.com/LithiraHettiarachchi/AgriVerse_RicePrediction",
        image: "https://i.ibb.co/TDT87WW7/agriverse.jpg",
    },
    {
        title: "Prettify",
        description: "An AI-powered face beautification application that removes scars and blemishes while enhancing facial features.",
        tags: ["Python", "Flutter", "MongoDB", "Docker", "YOLOv5"],
        github: "https://github.com/kaveenSP/prettify",
        image: "https://i.ibb.co/V02Lp1SL/prettify.jpg",
    },
    {
        title: "GestureI",
        description: "A gesture recognition model that accurately classifies English alphabets using sign language.",
        tags: ["Python", "Tensorflow", "Keras", "OpenCV"],
        github: "https://github.com/LithiraHettiarachchi/gestureRecognitionCNN",
        image: "https://i.ibb.co/TxMkQXw0/gesturei.jpg",
    },
    {
        title: "Health & Fitness Tracker",
        description: "Mobile application for tracking daily activity, diet, and sleep patterns with personalized AI insights.",
        tags: ["React Native", "Firebase", "Redux", "AI"],
        github: "#",
        demo: "#",
        image: "/project6.jpg",
    },
    {
        title: "Portfolio Manager",
        description: "Web application for managing investment portfolios, providing risk analysis and automated rebalancing suggestions.",
        tags: ["Vue.js", "Django", "PostgreSQL", "Pandas"],
        github: "#",
        demo: "#",
        image: "/project7.jpg",
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
                                {project.image && (project.image.startsWith("http") || project.image.startsWith("/")) && !project.image.includes("project") ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">
                                        <span className="text-xs">Project Image</span>
                                    </div>
                                )}
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
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} /> Code
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
