import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
	plugins: [
		process.env.NODE_ENV === "production" &&
			cloudflare({ viteEnvironment: { name: "ssr" } }),
		tsconfigPaths(),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
	],
});
