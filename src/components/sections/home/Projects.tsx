import Link from "next/link";

import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, projectsIntro } from "@/data/home";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeader
          eyebrow={projectsIntro.eyebrow}
          title={projectsIntro.title}
          aside={<ArrowLink href={projectsIntro.cta.href}>{projectsIntro.cta.label}</ArrowLink>}
        />

        <ul className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.image.id} className={cn(project.featured && "row-span-2")}>
              <Link href={project.href} className="lift block h-full rounded-[22px]">
                <ImageSlot
                  image={project.image}
                  compact={!project.featured}
                  hideIcon={!project.featured}
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className={cn("flex h-full flex-col justify-between rounded-[22px]", project.featured ? "p-4" : "p-3.5")}
                >
                  <div
                    className={cn(
                      "relative mt-auto rounded-xl bg-navy-950 text-white",
                      project.featured ? "px-3.5 py-3" : "self-start px-3 py-2.5",
                    )}
                  >
                    <h3 className={cn("font-display font-extrabold", !project.featured && "text-sm")}>{project.name}</h3>
                    <p className={cn("text-white/72", project.featured ? "text-[13px]" : "text-xs")}>{project.meta}</p>
                  </div>
                </ImageSlot>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
