import { ManagementGuide } from "@/components/sections/service/ManagementGuide";
import { page } from "@/data/services/school-audit";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function SchoolAuditPage() {
  return <ManagementGuide page={page} />;
}
