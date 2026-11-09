import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mayowa Ajadi | Senior Software Engineer & Technical Lead (C#, React, AWS)",
  description:
    "Senior software engineer and ISO/IEC 42001 Lead Implementer building and running products end to end with .NET, React, Node.js and AWS.",
};

export const viewport: Viewport = {
  themeColor: "#001238",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
