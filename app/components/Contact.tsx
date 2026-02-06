"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useRef, useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setStatus('idle');

        // Replace these with your actual Service ID, Template ID, and Public Key
        // Recommended: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_958bouj";
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_tyhm48a";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "HYQy6I50QCWvzw4Cm";

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-12 md:py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-16"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400">Want to learn more about me? Let’s connect and explore my work.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
                            <p className="text-gray-400 mb-8 text-sm md:text-base">
                                I'm currently available for freelance work and full-time positions.
                                If you have an exciting project or just want to say hi, feel free to drop a message!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={20} />
                                </div>
                                <span className="text-sm md:text-base break-all">lithirahettiarachchi.info@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0">
                                    <Phone size={20} />
                                </div>
                                <span className="text-sm md:text-base">+94 71 072 6355</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-sm md:text-base">Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass p-6 md:p-8 rounded-2xl"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
