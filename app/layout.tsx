import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lithira Hettiarachchi | AI & ML Engineer",
  description: "Portfolio of Lithira Hettiarachchi, a Software Engineer focused on AI and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://www.api.dashify.aurbyn.com/sdk/dashify-analytics.js" data-api-key="dfy_ca27d415dda8e3e3b5edcc11376f6d7b6fa593d3b59121872895c440b344a68d" data-website-id="site_97892f9e32bf4797"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
