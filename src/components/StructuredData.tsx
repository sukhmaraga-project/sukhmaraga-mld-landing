import { COURSE_CHECKOUT_URL, SITE_URL, site } from "@/config/site";
import { faq } from "@/config/content";

const stripPlaceholders = (s: string) => s.replace(/\s*\[[^\]]+\]/g, "").trim();

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}/#organization`,
        name: site.academy,
        url: SITE_URL,
        parentOrganization: { "@type": "Organization", name: site.parentBrand },
        email: site.contact.email,
        telephone: site.contact.phone,
        address: { "@type": "PostalAddress", ...site.contact.addressParts },
        sameAs: Object.values(site.social).filter(Boolean),
      },
      {
        "@type": "Course",
        name: `E-Course ${site.courseName}`,
        description: site.seoDescription,
        inLanguage: "id",
        provider: { "@id": `${SITE_URL}/#organization` },
        hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
        instructor: { "@type": "Person", name: site.instructorName },
        offers: {
          "@type": "Offer",
          price: site.priceValue,
          priceCurrency: "IDR",
          url: COURSE_CHECKOUT_URL,
          availability: "https://schema.org/InStock",
          category: "Paid",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: stripPlaceholders(item.a) },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw JSON; content is static and escaped below.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
