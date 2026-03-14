// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/** Remark plugin: rewrite relative .md links to /docs/<slug> */
function remarkDocLinks() {
  return function (tree) {
    function walk(node) {
      if (node.type === 'link' && node.url) {
        const url = String(node.url);
        if (/\.md(#|$)/.test(url) && !url.startsWith('http') && !url.startsWith('/')) {
          node.url = `/docs/${url.replace('.md', '')}`;
        }
      }
      if (node.children) node.children.forEach(walk);
    }
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  markdown: {
    remarkPlugins: [remarkDocLinks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
