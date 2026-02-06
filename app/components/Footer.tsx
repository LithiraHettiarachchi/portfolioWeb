export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Lithira Hettiarachchi. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-4">
                    {/* Add social interaction later if needed */}
                    <a href="https://github.com/LithiraHettiarachchi" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/lithirahettiarachchi/" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://www.researchgate.net/profile/Lithira-Hettiarachchi?ev=hdr_xprf
                    " className="hover:text-white transition-colors">ResearchGate</a>
                </div>
            </div>
        </footer>
    );
}
