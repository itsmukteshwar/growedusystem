import { ManagementGuide } from "@/components/sections/service/ManagementGuide";
import { page } from "@/data/services/day-school-management";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function DaySchoolManagementPage() {
  return <ManagementGuide page={page} />;
}
