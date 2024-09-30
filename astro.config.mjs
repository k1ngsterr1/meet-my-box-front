import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config"; // Make sure this is imported correctly!

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@shared": "/src/shared",
        "@features": "/src/features",
        "@entities": "/src/entities",
        "@widgets": "/src/widgets",
        "@assets": "/src/assets",
      },
    },
  },
});
