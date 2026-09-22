type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
};

export default function ArticleJsonLd({ headline, description, url }: ArticleJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline,
          description,
          mainEntityOfPage: url,
          url,
          publisher: {
            "@type": "Organization",
            name: "CalcShrwd",
            url: "https://www.calcshrwd.com",
          },
        }),
      }}
    />
  );
}
