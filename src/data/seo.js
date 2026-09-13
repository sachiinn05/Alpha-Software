export const SITE = {
  name: "Alpha Software",
  tagline: "Production Systems",
  url: "https://alphasoftware.co.in",
  locale: "en_IN",
  language: "en",
  email: "alphasoftware.co.in@gmail.com",
  phone: "+919695981330",
  phoneDisplay: "+91 96959 81330",
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  geoRegion: "IN-UP",
  founder: "Sujeet Kumar",
  twitter: "",
  linkedin: "https://www.linkedin.com/in/sujeet-kumar-aa55a524b/",
  ogImage: "/og-image.jpeg",
  keywords: [
    "Alpha Software",
    "web application development",
    "mobile app development",
    "React.js",
    "React Native",
    "Node.js",
    "OTT platform development",
    "startup software studio",
    "Lucknow software company",
    "full-stack development",
    "AWS deployment",
  ],
};

export const homeSeo = {
  title: "Alpha Software — Production-Ready Web & Mobile Systems",
  description:
    "Alpha Software designs, builds, and scales production-ready web applications, mobile apps, and cloud systems for startups worldwide. Founded by Sujeet Kumar in Lucknow.",
  path: "/",
};

export function origin() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return SITE.url;
}

export function absoluteUrl(path = "/") {
  const base = origin().replace(/\/$/, "");
  const next = path.startsWith("/") ? path : `/${path}`;
  return `${base}${next}`;
}
