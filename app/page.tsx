"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Script from "next/script";

// export const metadata = {
//   title: "Eyob | Full-Stack Developer Portfolio",
//   description: "Explore the portfolio of Eyob, a modern full-stack (MERN) developer. View projects, experience, and contact information.",
//   keywords: ["Eyob", "Portfolio", "Full-Stack Developer", "MERN", "React", "Next.js", "JavaScript", "TypeScript"],
//   openGraph: {
//     title: "Eyob | Full-Stack Developer Portfolio",
//     description: "Explore the portfolio of Eyob, a modern full-stack (MERN) developer. View projects, experience, and contact information.",
//     url: "https://my-portfolio-taupe-sigma-98.vercel.app/", // Replace with your real domain
//     siteName: "Eyob Portfolio",
//     images: [
//       {
//         url: "https://my-portfolio-taupe-sigma-98.vercel.app/projects", // Replace with your OG image
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Eyob | Full-Stack Developer Portfolio",
//     description: "Explore the portfolio of Eyob, a modern full-stack (MERN) developer. View projects, experience, and contact information.",
//     images: ["https://my-portfolio-taupe-sigma-98.vercel.app/"], // Replace with your OG image
//   },
// };

export default function Home() {
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
      <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
           <FloatingNav navItems={navItems}/>
          
          <Hero/>
          <Grid/>
          <RecentProjects/>
          <Clients/>
          <Experience/>
          <Approach/>
          <Footer/>
        </div>
      </main>
    </>
  );
}
