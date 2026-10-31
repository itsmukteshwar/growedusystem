import { BoardGuide } from "@/components/sections/service/BoardGuide";
import { page } from "@/data/services/state-board";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function StateBoardSetupPage() {
  return <BoardGuide page={page} />;
}
