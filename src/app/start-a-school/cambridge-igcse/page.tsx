import { BoardGuide } from "@/components/sections/service/BoardGuide";
import { page } from "@/data/services/cambridge-igcse";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function CambridgeSetupPage() {
  return <BoardGuide page={page} />;
}
