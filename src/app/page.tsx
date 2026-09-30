import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { CourseIntroduction } from "@/components/sections/CourseIntroduction";
import { LearningModules } from "@/components/sections/LearningModules";
import { Curriculum } from "@/components/sections/Curriculum";
import { PracticalLearning } from "@/components/sections/PracticalLearning";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { Benefits } from "@/components/sections/Benefits";
import { Instructor } from "@/components/sections/Instructor";
import { Certificate } from "@/components/sections/Certificate";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { MobileStickyCTA } from "@/components/sections/MobileStickyCTA";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Langsung ke konten
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <ProblemSection />
        <CourseIntroduction />
        <LearningModules />
        <Curriculum />
        <PracticalLearning />
        <AudienceSection />
        <Benefits />
        <Instructor />
        <Certificate />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
