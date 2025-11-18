"use client";

import HeroSection from "../components/home/HeroSection";
import HighlightedProjectsSection from "../components/home/HighlightedProjectsSection";

export default function Home() {
  return (
    <div className="[background-image:radial-gradient(circle_at_2px_2px,var(--dottedGrid)_2px,transparent_0)] [background-size:30px_30px] [background-attachment:fixed]">
      <HeroSection />
      <HighlightedProjectsSection />
    </div>
  );
}
