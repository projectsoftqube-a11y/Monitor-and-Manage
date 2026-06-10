import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the M&M Security terms of service, platform usage licenses, client SLAs, and legal requirements.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | M&M Guard App",
    description: "Read M&M Security's terms of service, legal disclaimers, user obligations, and software agreement parameters.",
    url: "https://www.mandmsecurity.com/terms-and-conditions",
    type: "website",
  },
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
