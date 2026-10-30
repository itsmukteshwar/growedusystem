import Image from "next/image";
import Link from "next/link";

import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import logo from "../../../public/images/logo.png";

/** Brand logo linking to the homepage. The intrinsic size comes from the file. */
export function Logo({ className, imageClassName, priority = false }: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link href={routes.home} className={cn("flex items-center", className)} aria-label={`${siteConfig.name} — home`}>
      <Image
        src={logo}
        alt={siteConfig.name}
        priority={priority}
        sizes="200px"
        className={cn("h-10.5 w-auto", imageClassName)}
      />
    </Link>
  );
}
