import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        react(),
    ],
    envFile: '.env', // specify the .env file here
});
