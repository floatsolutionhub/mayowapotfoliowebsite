import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const title = "Mayowa Ajadi | Senior Software Engineer & Technical Lead (C#, React, AWS)";
const description =
  "Senior software engineer and ISO/IEC 42001 Lead Implementer building and running products end to end with .NET, React, Node.js and AWS.";

export const metadata: Metadata = {
  // Link previews (WhatsApp, LinkedIn, X) need absolute image URLs; set NEXT_PUBLIC_SITE_URL to the live domain
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Mayowa Ajadi",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
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
