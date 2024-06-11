import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

import "../styles/output.css";
export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <ToastContainer
          style={{
            width: "360px",
          }}
        />
      </body>
    </html>
  );
}
