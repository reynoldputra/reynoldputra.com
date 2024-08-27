import Toaster from "@/components/Toaster";
import "@/styles/output.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import clsx from "clsx";
import { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

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

export const metadata : Metadata = {
  title: {
    template: '%s | Reynold Putra',
    absolute: 'Reynold Putra'
  },
  description:
    "An online portfolio and blog by Reynold Putra. Explore my projects and read my insights on software engineering.",
  openGraph : {
    images: "/assets/reynoldputra.png"
  }
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
        <SpeedInsights />
        <GoogleAnalytics gaId="GTM-PBF6P2V9" />
      </body>
    </html>
  );
}
