import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { boards, boardsIntro } from "@/data/home";

export function Boards() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={boardsIntro.eyebrow}
          title={boardsIntro.title}
          aside={<ArrowLink href={boardsIntro.cta.href}>{boardsIntro.cta.label}</ArrowLink>}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
          {boards.map((board, i) => (
            <Reveal key={board.name} delay={i * 70} as="div">
            <Link
              href={board.href}
              className="lift group flex min-h-49 flex-col gap-2.5 rounded-[18px] border-[1.5px] border-line bg-white p-6 hover:border-brand-500! h-full"
            >
              <h3 className="text-[28px] font-extrabold tracking-[-0.5px] text-navy-800">{board.name}</h3>
              <p className="flex-1 text-sm leading-[1.6] text-body">{board.description}</p>
              <span className="inline-flex size-10 items-center justify-center self-start rounded-full bg-navy-50 text-navy-800 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2.2} />
                <span className="sr-only">{board.name} school setup</span>
              </span>
            </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
