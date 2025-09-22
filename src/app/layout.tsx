import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/components/footer";
import { cn } from "@/utils/cn";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {};

const DM_SansFont = DM_Sans({
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={cn(`flex min-h-dvh flex-col`, DM_SansFont.className)}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
