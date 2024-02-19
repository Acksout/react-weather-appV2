import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import env from "vite-plugin-env";

export default defineConfig({
    plugins: [
        react(),
        env({
            // Path to your .env file (relative to project root)
            file: ".env",
        })
    ]
});
