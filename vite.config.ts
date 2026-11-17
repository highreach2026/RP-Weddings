import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  base: "/RP-Weddings/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-404-fallback",
      closeBundle() {
        const distIndex = path.resolve(__dirname, "dist/index.html");
        const dist404 = path.resolve(__dirname, "dist/404.html");
        if (fs.existsSync(distIndex)) {
          fs.copyFileSync(distIndex, dist404);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
