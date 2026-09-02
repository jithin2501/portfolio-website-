import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroCanvas from "./components/HeroCanvas";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jithin P Joji - Portfolio",
  description: "Full Stack Developer Portfolio",
};

import MainLayout from "./components/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Outfit:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
      </head>
      <body style={{ background: 'transparent', color: 'var(--text)' }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable right-click
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
              });

              // Disable image dragging
              document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                }
              });

              // Block DevTools shortcuts
              document.addEventListener('keydown', function(e) {
                // F12
                if (e.key === 'F12' || e.keyCode === 123) {
                  e.preventDefault();
                }
                // Ctrl+Shift+I or Cmd+Option+I
                if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === 'I' || e.key === 'i')) {
                  e.preventDefault();
                }
                // Ctrl+Shift+C or Cmd+Option+C
                if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === 'C' || e.key === 'c')) {
                  e.preventDefault();
                }
                // Ctrl+Shift+J or Cmd+Option+J
                if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === 'J' || e.key === 'j')) {
                  e.preventDefault();
                }
                // Ctrl+U or Cmd+U (View Source)
                if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
                  e.preventDefault();
                }
              });
            `
          }}
        />
        <HeroCanvas />
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
