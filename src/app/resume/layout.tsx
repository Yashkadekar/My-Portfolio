import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Yash Kadekar",
  description:
    "View and download Yash Kadekar's professional resume. Student developer with expertise in React, Next.js, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Yash Kadekar",
    description:
      "View and download Yash Kadekar's professional resume featuring his experience and skills as a student developer.",
    url: "https://yashkadekar.vercel.app/resume",
    siteName: "Yash Kadekar",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Yash Kadekar Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Yash Kadekar",
    description:
      "View Yash Kadekar's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      {/* Preload the PDF for better performance */}
      <link
        rel="preload"
        href="/docs/Yash_Kadekar_Resume.pdf"
        as="document"
        type="application/pdf"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
