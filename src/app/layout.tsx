import './globals.css';
import { inter, mono, nasalization, quentine } from './fonts';
import ClientLayout from './client-layout';
import { generatePersonStructuredData, generateWebsiteStructuredData, generateOrganizationStructuredData } from "@/lib/structured-data";

export { metadata } from './metadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  const fontClasses = `${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`;
  
  return (
    <html 
      lang="en" 
      className={fontClasses}
      suppressHydrationWarning
      suppressContentEditableWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </head>
      <body className={fontClasses}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
