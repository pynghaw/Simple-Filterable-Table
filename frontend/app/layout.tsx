import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filter Table",
  description: "Simple Filterable Table with FastAPI & Next.js",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
