import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaden cooks Portugal — Farm To Go",
  description:
    "A one-night, three-course Portuguese dinner at Farm To Go in Slate Hill, NY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
