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
import { Services } from "@/components/sections/home/Services";
import { Stats } from "@/components/sections/home/Stats";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/data/home";
import { faqSchema, graph } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(faqs))} />
      <Hero />
      <Reveal offset={20}><Stats /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><Boards /></Reveal>
      <Reveal><CaseStudy /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Platforms /></Reveal>
      <Reveal><Founder /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal offset={0}><FinalCta /></Reveal>
    </>
  );
}
