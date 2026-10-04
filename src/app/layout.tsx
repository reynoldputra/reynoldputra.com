import Toaster from "@/components/Toaster";
import "@/styles/output.css";
import "highlight.js/styles/github-dark.css";
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
  metadataBase: new URL(process.env.SITE_URL || "https://reynoldputra.com"),
  twitter: { card: "summary_large_image" },
  openGraph: {
    description: "An online portfolio and blog by Reynold Putra. Explore my projects and read my insights on software engineering.",
  },
  verification: {
    google: "5vSfSGMqthjJyNaNQU3i4lqJAC-xwP9EJhUvujun8kM",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

// Stored choice wins; otherwise follow the device setting, falling back to light.
const themeInitScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(poppins.variable, roboto_mono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <Script 
        defer 
        src="https://cloud.umami.is/script.js" 
        data-website-id="2f8333ff-bfde-4d5b-9264-1eec2f4ae69a" 
        data-domains="reynoldputra.com,www.reynoldputra.com"
      />
      <body>
        <div className="bg-background text-foreground min-h-screen">
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
