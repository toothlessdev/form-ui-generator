import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const vitestConfig = {
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/__test__/setup.ts",
    },
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    ...vitestConfig,
});
