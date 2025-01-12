import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './',
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  content: {
    markdown: {
      mdc: true,
      toc: {
        depth: 4,
        searchDepth: 4
      },
      remarkPlugins: ['remark-gfm'],
      rehypePlugins: ['rehype-slug', 'rehype-autolink-headings']
    },
    sources: {
      content: {
        driver: 'fs',
        base: '../content'
      }
    },

    navigation: {
      fields: ['title', 'description'],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2025-01-06'
})