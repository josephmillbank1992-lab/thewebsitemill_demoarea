import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Website Mill | Live Website Showcase",
  description: "Explore eight distinct, interactive and responsive business website concepts created by The Website Mill.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
