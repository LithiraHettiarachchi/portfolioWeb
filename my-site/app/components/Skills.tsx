"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Python", category: "Languages" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Tools" },
    { name: "AWS", category: "Cloud" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-gray-400">Tools and technologies I work with</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-4 rounded-xl glass border border-white/5 flex flex-col items-center justify-center hover:border-primary/50 transition-colors group"
                        >
                            <span className="text-lg font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                            <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
