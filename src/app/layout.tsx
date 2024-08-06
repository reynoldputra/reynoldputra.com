import Toaster from "@/components/Toaster";
import "@/styles/output.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Poppins, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "Reynold Putra",
  description:
    "An online portfolio and blog by Reynold Putra. Explore my projects and read my insights on software engineering.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={clsx(poppins.variable, roboto_mono.variable)}>
      <body>
        <div className="bg-primary-950 text-rockblue-50 min-h-screen">
          {children}
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
