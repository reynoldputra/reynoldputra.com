import Toaster from "@/components/Toaster";
import "@/styles/output.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Reynold Putra",
    absolute: "Reynold Putra",
  },
  description:
    "An online portfolio and blog by Reynold Putra. Explore my projects and read my insights on software engineering.",
  openGraph: {
    images: "/assets/reynoldputra.png",
  },
  verification: {
    google: "5vSfSGMqthjJyNaNQU3i4lqJAC-xwP9EJhUvujun8kM",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={clsx(poppins.variable, roboto_mono.variable)}>
      <Script 
        defer 
        src="https://cloud.umami.is/script.js" 
        data-website-id="2f8333ff-bfde-4d5b-9264-1eec2f4ae69a" 
      />
      <body>
        <div className="bg-primary-950 text-rockblue-50 min-h-screen">
          {children}
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-GSRZ7D2FL8" />
      </body>
    </html>
  );
}
