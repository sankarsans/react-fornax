import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  // Since your site is deploying to the root domain https://sankarsans.github.io/
  base: "/",
});
