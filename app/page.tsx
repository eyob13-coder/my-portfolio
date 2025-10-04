"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Script from "next/script";
import SkillsGrid from "@/components/ui/SkillsGrid";
import InteractiveTimeline from "@/components/ui/InteractiveTimeline";
import ContactForm from "@/components/ui/ContactForm";
import BlogSection from "@/components/ui/BlogSection";
import { useEffect } from "react";



export default function Home() {
  // Ensure page starts at the top when component mounts
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Remove any hash from URL to prevent auto-scrolling to sections
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <>
      <Script
        type="application/ld+json"
        id="structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Eyob",
            url: "https://my-portfolio-taupe-sigma-98.vercel.app/",
            sameAs: [
              "https://github.com/eyob13-coder",
              "https://twitter.com/Eyob_Geremew_"
            ]
          }),
        }}
      />
      <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          <Grid/>
          <RecentProjects/>
          <Clients/>
          <SkillsGrid />
          <InteractiveTimeline />
          <Approach/>
          <BlogSection />
          <ContactForm />
          <Footer/>
        </div>
      </main>
    </>
  );
}
