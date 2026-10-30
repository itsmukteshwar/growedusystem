import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes } from "@/config/navigation";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="px-6 py-28">
      <Container className="max-w-160 text-center">
        <p className="mb-3 font-display text-xs font-extrabold tracking-[1.6px] text-brand-600 uppercase">404</p>
        <h1 className="mb-4 text-[clamp(30px,3.6vw,44px)] leading-[1.1] font-extrabold tracking-[-1px] text-ink">
          This page is still being built
        </h1>
        <p className="mb-8 text-[17px] leading-[1.7] text-body">
          The page you&apos;re looking for doesn&apos;t exist yet. Head back home or talk to our team directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href={routes.home} variant="navy" size="lg">
            Back to home
          </ButtonLink>
          <ButtonLink href={routes.consultation} size="lg" withArrow>
            Book Free Consultation
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
