"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const events = [
    {
        title: "AMCEHA 2025",
        role: "Presenter",
        date: "Mar 2025",
        location: "University of Jaffna, Sri Lanka",
        description: "Participated in AMCEHA 2025, presenting the research titled “An Analysis of Machine Learning and Time Series for Predicting EV Charging Demand with Traffic and Weather Data,” which focuses on predictive modeling for EV charging demand using traffic and weather data. The conference was held in collaboration with the Western Norwegian University of Applied Sciences, promoting international academic collaboration.",
    },
    {
        title: "Tech-Triathlon 2025",
        role: "Participant",
        date: "Aug 2025",
        location: "Virtual",
        description: "",
    },
];

export default function Events() {
    return (
        <section id="events" className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Achievements</h2>
                    <p className="text-gray-400">Hackathons & Conferences</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                                <Award size={32} />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold">{event.title}</h3>
                                    <span className="text-sm text-accent font-medium px-3 py-1 rounded-full bg-accent/10 w-fit mt-2 md:mt-0">{event.role}</span>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                                </div>
                                <p className="text-gray-300">{event.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
