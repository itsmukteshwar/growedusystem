"use client";

/**
 * Reveal — scroll-triggered entrance animation.
 *
 * Apple Design principles applied (Designing Fluid Interfaces, WWDC 2018):
 * - Elements remain fully visible without JS (no FOUC on static export)
 * - JS hides element on mount, then reveals it when it enters the viewport
 * - prefers-reduced-motion → opacity-only cross-fade, no Y translation
 * - Single IntersectionObserver per instance, cleaned up on unmount
 * - Fires once: element stays visible once revealed (no re-animation on scroll-up)
 */

import { ElementType, ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — add 80–120 ms per sibling for card grids */
  delay?: number;
  /** Root margin bottom offset — tightens when next section overlaps */
  offset?: number;
  /** Render as a different tag (default: div) */
  as?: ElementType;
}

export function Reveal({ children, className, delay = 0, offset = 48, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark as JS-ready so CSS hides the element; without JS it stays visible.
    el.setAttribute("data-reveal", "");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Small async tick so the initial hidden state paints first (avoids flash)
        requestAnimationFrame(() => {
          if (delay) {
            el.style.transitionDelay = `${delay}ms`;
          }
          el.setAttribute("data-reveal-visible", "");
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.08,
        rootMargin: `0px 0px -${offset}px 0px`,
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      el.removeAttribute("data-reveal");
      el.removeAttribute("data-reveal-visible");
    };
  }, [delay, offset]);

  // Cast ref — ElementType doesn't carry the ref constraint but HTMLElement works fine
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}

/** Convenience wrapper: wraps children inside a <ul> / <ol> / <div>
 *  and staggers each immediate child item via delay × index.
 */
export function RevealStagger({
  children,
  stagger = 80,
  className,
  itemClassName,
}: {
  children: ReactNode[];
  stagger?: number;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <Reveal key={i} delay={i * stagger} className={cn(itemClassName)}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
