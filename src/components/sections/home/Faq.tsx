import { MessageCircle } from "lucide-react";

import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { faqIntro, faqs } from "@/data/home";

/**
 * FAQ accordion built on native <details name="faq">: zero JavaScript,
 * one item open at a time, and every answer is in the HTML for search engines.
 */
export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-canvas px-6 py-20 md:py-26">
      <Container className="flex flex-wrap gap-14">
        <div className="min-w-0 flex-[1_1_340px]">
          <Eyebrow>{faqIntro.eyebrow}</Eyebrow>
          <SectionTitle className="mb-4">{faqIntro.title}</SectionTitle>
          <p className="mb-7 text-base leading-[1.7] text-body">{faqIntro.description}</p>

          <div className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-6">
            <ImageSlot image={faqIntro.helpImage} hideLabel hideIcon sizes="56px" className="size-14 shrink-0 rounded-full" />
            <div>
              <p className="mb-1 font-display font-extrabold text-ink">{faqIntro.helpTitle}</p>
              <p className="mb-3.5 text-sm leading-[1.6] text-body">{faqIntro.helpText}</p>
              <ButtonLink
                href={siteConfig.contact.whatsappHref}
                variant="navy"
                size="sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
                {faqIntro.helpCta}
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-[2_1_520px] flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              name="faq"
              open={i === 0}
              className="group overflow-hidden rounded-2xl border border-line bg-white transition-colors open:border-navy-300"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5.5 font-display text-[17px] font-bold text-ink">
                <h3>{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-50 text-xl leading-none text-navy-800 transition-colors group-open:bg-brand-600 group-open:text-white"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="max-w-170 px-6 pb-6 text-[15px] leading-[1.75] text-body">{faq.answer}</p>
            </details>
          ))}
          <ArrowLink href={faqIntro.cta.href} className="mt-3">
            {faqIntro.cta.label}
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
