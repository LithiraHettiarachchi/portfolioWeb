import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Clerion Consent Banner */}
        <Script
          src="https://api.getclerion.com/sdk/clerion-consent-banner.js"
          strategy="afterInteractive"
        />
        {/* Clerion Consent Initialization */}
        <Script id="clerion-consent-init" strategy="afterInteractive">
          {`
            (function initClerion() {
              if (window.clerionConsent) {
                window.clerionConsent.init({
                  apiKey: 'dfy_7b92a437106a4638895eb6e5da82eade',
                  websiteId: 'site_6134e73dec344585'
                });
              } else {
                setTimeout(initClerion, 50);
              }
            })();
          `}
        </Script>
        {/* Clerion Analytics SDK */}
        <Script
          src="https://api.getclerion.com/sdk/clerion-analytics.js"
          data-api-key="dfy_7b92a437106a4638895eb6e5da82eade"
          data-website-id="site_6134e73dec344585"
          data-website-name="Lithira Hettiarachchi Portfolio"
          strategy="afterInteractive"
        />
        <Script id="clerion-analytics-init" strategy="afterInteractive">
          {`
            function initClerionAnalytics() {
              if (window.clerionAnalytics) {
                window.clerionAnalytics.init({
                  apiKey: 'dfy_7b92a437106a4638895eb6e5da82eade',
                  websiteId: 'site_6134e73dec344585',
                  websiteName: 'Lithira Hettiarachchi Portfolio',
                  websiteDomain: window.location.hostname,
                  websiteUrl: window.location.origin
                });
              } else {
                setTimeout(initClerionAnalytics, 50);
              }
            }
            function sendClerionSiteDetails() {
              var siteDetails = {
                eventType: 'site_details',
                websiteId: 'site_6134e73dec344585',
                websiteName: 'Lithira Hettiarachchi Portfolio',
                websiteDomain: window.location.hostname,
                websiteUrl: window.location.origin,
                pageTitle: document.title
              };

              function sendDirectly() {
                try {
                  fetch('https://api.getclerion.com/track/batch', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    keepalive: true,
                    body: JSON.stringify({ events: [siteDetails] })
                  }).catch(function(err) {
                    console.warn('Clerion direct batch send failed:', err);
                  });
                } catch (err) {
                  console.warn('Clerion direct batch send error:', err);
                }
              }

              if (window.clerionAnalytics) {
                if (typeof window.clerionAnalytics.track === 'function') {
                  window.clerionAnalytics.track('site_details', siteDetails);
                } else if (typeof window.clerionAnalytics.trackEvent === 'function') {
                  window.clerionAnalytics.trackEvent(siteDetails);
                } else if (typeof window.clerionAnalytics.sendBatch === 'function') {
                  window.clerionAnalytics.sendBatch([siteDetails]);
                } else if (typeof window.clerionAnalytics.send === 'function') {
                  window.clerionAnalytics.send(siteDetails);
                } else {
                  sendDirectly();
                }
              } else {
                sendDirectly();
              }
            }
            initClerionAnalytics();
            setTimeout(sendClerionSiteDetails, 200);
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
