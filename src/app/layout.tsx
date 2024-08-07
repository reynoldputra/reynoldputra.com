import { Analytics } from "@vercel/analytics/react";

import { ReactNode } from "react";
import Toaster from "@/components/Toaster";
import "@/styles/output.css";

export const metadata = {
  title: "Reynold Putra",
  description:
    "An online portfolio and blog by Reynold Putra. Explore my projects and read my insights on software engineering.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-primary-950 text-rockblue-50">{children}</div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
