import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unify Media - Connect with Creators",
  description: "The ultimate platform for creators to share exclusive content and connect with their biggest fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
