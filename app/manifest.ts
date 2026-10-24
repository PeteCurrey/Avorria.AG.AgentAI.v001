import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avorria — Performance-First Digital Agency",
    short_name: "Avorria",
    description:
      "Performance-first digital agency building immersive websites and autonomous AI systems. London & New York.",
    start_url: "/",
    display: "standalone",
    background_color: "#050508",
    theme_color: "#050508",
    orientation: "portrait-primary",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/og.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
        form_factor: "wide",
        label: "Avorria homepage",
      },
    ],
  };
}
