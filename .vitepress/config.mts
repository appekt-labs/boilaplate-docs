import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Boilaplate Docs",
  description: "This is the official documentation for the boilaplate template for next.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/getting-started' },
      { text: "Buy Boilaplate Now!", target: "_blank", link: "https://appekt-labs.lemonsqueezy.com/buy/cf34eff5-2997-4154-8c61-3356db0bcabd" }

    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Features', link: '/features' },
          { text: "Pages Overview", link: "/pages-overview" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Authentication", link: "/authentication" },
          { text: "Payment Integration", link: "/payment-integration" },
          { text: "Blog", link: "/blog.md" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/appekt-labs/boilaplate' }
    ]
  }
})
