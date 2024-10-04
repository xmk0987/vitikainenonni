import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onni Vitikainen | Full-Stack Developer",
  description:
    "Portfolio of Onni Vitikainen, a full-stack developer specializing in modern web development, software engineering, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
