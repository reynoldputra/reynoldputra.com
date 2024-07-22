import { Analytics } from "@vercel/analytics/react";

import "@/styles/output.css";
import { ReactNode } from "react";
import Toaster from "@/components/general/Toaster";

export const metadata = {
  title: "Reynold Putra",
  description: "An online portfolio and blog by Reynold Putra. Explore my projects and read my insights on software engineering.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
