import { defineConfig } from 'astro/config';
import { sanityIntegration } from '@sanity/astro';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: "hybrid",
    adapter: vercel(),
    integrations: [sanityIntegration({
        projectId: "z1e5u22n",
        dataset: "production",
        studioBasePath: "/studio",
        useCdn: true,
        apiVersion: "v2022-03-07"
    }), react()],
});
