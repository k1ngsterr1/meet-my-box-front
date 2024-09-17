import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // output: "client",
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@shared": "/src/shared",
        "@features": "/src/features",
        "@entities": "/src/entities",
        "@shared": "/src/shared",
        "@widgets": "/src/widgets",
        "@assets": "/src/assets",
      },
    },
  },
});
