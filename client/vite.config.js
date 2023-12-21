import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ["path", "util"],
      globals: {
        // Buffer: true,
        global: true,
        // process: true,
      },
    }),
  ],
  // define: {
  //   global: {},
  // },
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  resolve: {
    alias: {
      "socket.io-client": "socket.io-client/dist/socket.io.js",

      // "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
});
