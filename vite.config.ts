import legacy from "@vitejs/plugin-legacy";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy(), reactRefresh(), viteCompression()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // automatically import React in jsx files
  },
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
});
