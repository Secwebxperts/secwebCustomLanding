import HomePageComp from "@/components/main/home";
import { cn } from "@/utils/cn";

export default function Home({}: PageProps<"/">) {
  return (
    <main className={cn(`grow`)}>
      <HomePageComp />
    </main>
  );
}
