interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  const baseUrl = "https://asphaltcalculator.io";
  const fullTitle = `${title} : Asphalt Calculator`;
  const imageUrl = `https://asphaltcalculator.io/assets/new-logo.png`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Prince Singh" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="icon" type="image/x-icon" href="/assets/new-logo.png" />
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={canonical ? `${baseUrl}${canonical}` : baseUrl}
      />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={baseUrl} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:url"
        content={canonical ? `${baseUrl}${canonical}` : baseUrl}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Mobile Optimization */}
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

      {/* Favicon */}
      <link rel="icon" href="/assets/new-logo.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/new-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/new-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/new-logo.png"
      />

      {/* Additional SEO Tags */}
      <meta property="og:locale" content="en_US" />
      <meta name="theme-color" content="#ffffff" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://asphaltcalculator.io",
            name: "Asphalt Calculator",
            description:
              "Accurate asphalt material calculator for your construction needs. Calculate the required asphalt for your project effortlessly.",
            author: {
              "@type": "Person",
              name: "Prince Singh",
            },
            publisher: {
              "@type": "Organization",
              name: "Asphalt Calculator",
              logo: {
                "@type": "ImageObject",
                url: "https://asphaltcalculator.io/assets/new-logo.png",
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://asphaltcalculator.io/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            inLanguage: "en-US",
          }),
        }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I use this calculator for a variety of asphalt projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This can be used for multiple projects ranging from small driveways and pavements to bigger commercial projects like roads and dams."
      }
    },
    {
      "@type": "Question",
      "name": "How can I calculate the cost of asphalt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You simply need to input the price per unit of mass or volume as per your chosen measurements, in the calculator. After this, you’ll get your approximate project cost."
      }
    },
    {
      "@type": "Question",
      "name": "What is the required base thickness?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For many properties, a 3 base of asphalt on top of a 4 to 6 deep base of crushed gravel might be a reasonable alternative to using full-thickness asphalt. For parking lots, it should be an 8’’ crushed gravel base."
      }
    },
    {
      "@type": "Question",
      "name": "How many types of Asphalt can I choose from?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can choose asphalt from mainly 5 types of asphalt, including hot mix asphalt, warm mix asphalt, cold mix asphalt, porous asphalt, and asphalt concrete."
      }
    },
    {
      "@type": "Question",
      "name": "Which units are appropriate for input measurements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are suitable units for length, area, depth, and density in the calculator for diverse project requirements."
      }
    }
  ]
}

        `,
        }}
      ></script>
    </>
  );
}
