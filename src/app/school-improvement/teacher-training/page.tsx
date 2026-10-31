import { ManagementGuide } from "@/components/sections/service/ManagementGuide";
import { page } from "@/data/services/teacher-training";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function TeacherTrainingPage() {
  return <ManagementGuide page={page} />;
}
