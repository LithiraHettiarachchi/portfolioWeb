"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Java", "Python", "R", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React.js", "Next.js", "Node.js", "Express", "Spring Boot", "FastAPI", "React Native"]
    },
    {
        title: "AI & Data Science",
        skills: ["TensorFlow", "Pandas", "NumPy", "Scikit-learn", "Time Series Analysis"]
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Firebase Firestore"]
    },
    {
        title: "Tools & DevOps",
        skills: ["Docker", "Git", "REST API"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl text-primary"></div>
            <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl text-secondary"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Technical Expertise
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent, scalable, and robust applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl glass border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
