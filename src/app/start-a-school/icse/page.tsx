import { BoardGuide } from "@/components/sections/service/BoardGuide";
import { page } from "@/data/services/icse";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function IcseSetupPage() {
  return <BoardGuide page={page} />;
}
