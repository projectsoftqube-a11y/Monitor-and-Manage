import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how Guard Monitor & Manage (M&M App) handles data privacy, collection, and user security protocols.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | M&M Guard App",
    description: "Learn about how M&M Guard App collects, stores, and protects customer and guard activity data.",
    url: "https://www.mandmsecurity.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}