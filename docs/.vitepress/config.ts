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
      // '/guide/': [
      //   {
      //     text: '开发指南',
      //     items: [
      //       { text: '简介', link: '/guide/' },
      //       { text: '开发规范', link: '/guide/development-style' },
      //     ],
      //   },
      // ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Young',
    }
  }
})
