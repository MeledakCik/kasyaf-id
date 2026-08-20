import "./globals.css";
import type { Metadata } from "next";
import { TopProgressBar } from "@/components/top-progress-bar";
import { PageTransition } from "@/components/page-transition";

const siteUrl = "https://kasyaf.id";
const title = "Kasyaf.id - Redis & Vector Cloud by Cikawan";
const description =
  "Kasyaf Cloud - Lightweight Managed Redis & Qdrant Vector DB by Cikawan. Upstash alternative, fast & affordable.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Kasyaf",
    "Kasyaf Cloud",
    "Cikawan",
    "Redis Cloud",
    "Qdrant",
    "Vector Database",
    "Upstash Alternative",
    "Managed Redis",
  ],
  authors: [{ name: "Cikawan" }],
  creator: "Cikawan",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "BhxoCE5pDRmhMsvBgkRdKyw8dqNYMFc4jvOfFclWLRw",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kasyaf.id",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kasyaf Cloud",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  founder: {
    "@type": "Person",
    name: "Cikawan",
  },
  sameAs: ["https://kasyaf.id"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-zinc-100 antialiased overflow-x-clip">
        <TopProgressBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
