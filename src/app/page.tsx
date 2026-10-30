import { About } from "@/components/sections/home/About";
import { Boards } from "@/components/sections/home/Boards";
import { CaseStudy } from "@/components/sections/home/CaseStudy";
import { Faq } from "@/components/sections/home/Faq";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Founder } from "@/components/sections/home/Founder";
import { Hero } from "@/components/sections/home/Hero";
import { Platforms } from "@/components/sections/home/Platforms";
import { Process } from "@/components/sections/home/Process";
import { Projects } from "@/components/sections/home/Projects";
import { Resources } from "@/components/sections/home/Resources";
import { Services } from "@/components/sections/home/Services";
import { Stats } from "@/components/sections/home/Stats";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/data/home";
import { faqSchema, graph } from "@/lib/schema";

// The homepage inherits its title, description and canonical URL from app/layout.tsx.

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(faqs))} />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Boards />
      <CaseStudy />
      <Projects />
      <Testimonials />
      <Platforms />
      <Founder />
      <Resources />
      <Faq />
      <FinalCta />
    </>
  );
}
