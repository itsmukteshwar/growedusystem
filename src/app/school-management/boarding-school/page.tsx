import { ManagementGuide } from "@/components/sections/service/ManagementGuide";
import { page } from "@/data/services/boarding-school-management";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function BoardingSchoolManagementPage() {
  return <ManagementGuide page={page} />;
}
