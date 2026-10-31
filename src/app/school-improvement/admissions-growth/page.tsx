import { ManagementGuide } from "@/components/sections/service/ManagementGuide";
import { page } from "@/data/services/admissions-growth";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function AdmissionsGrowthPage() {
  return <ManagementGuide page={page} />;
}
