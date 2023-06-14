import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Young's Site",
  description: 'about Young.',
  lastUpdated: true, // 开启上次更新时间
  base: '/Young/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  ],
  themeConfig: {
    // Type is `DefaultTheme.Config`
    logo: 'logo.svg',
    siteTitle: "Young",
    nav: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yanghui23/Young' }
    ],
    sidebar: {
      '/blog-ape/': [
        {
          text: '博客文章',
          items: [
            { text: '简介', link: '/blog-ape/' },
            { text: '系列', link: '/blog-ape/collect' },
          ],
        },
      ],
      '/resource-share-ape/': [
        {
          text: '资源导航',
          items: [
            { text: '简介', link: '/resource-share-ape/' },
            { text: '官方文档', link: '/resource-share-ape/dev-doc' },
          ],
        },
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Young',
    }
  }
})
