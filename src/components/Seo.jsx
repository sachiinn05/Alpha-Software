import { useEffect } from "react";
import { SITE, absoluteUrl, origin } from "../data/seo";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  type = "website",
  noIndex = false,
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
    const url = absoluteUrl(path);
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

    document.title = fullTitle;
    document.documentElement.lang = SITE.language;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", SITE.keywords.join(", "));
    upsertMeta("name", "author", SITE.name);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsertMeta("name", "theme-color", "#000000");
    upsertMeta("name", "geo.region", SITE.geoRegion);
    upsertMeta("name", "geo.placename", SITE.city);

    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:locale", SITE.locale);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertLink("canonical", url);

    const graph = jsonLd ?? [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: SITE.name,
        url: origin(),
        image: imageUrl,
        email: SITE.email,
        telephone: SITE.phoneDisplay,
        description,
        founder: {
          "@type": "Person",
          name: SITE.founder,
          sameAs: [SITE.linkedin],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        areaServed: "Worldwide",
        sameAs: [SITE.linkedin, "https://www.fiverr.com/s/zWqgR2E"],
        knowsAbout: SITE.keywords,
      },
    ];

    upsertJsonLd("alpha-jsonld", Array.isArray(graph) ? graph : [graph]);
  }, [title, description, path, image, type, noIndex, jsonLd]);

  return null;
}
