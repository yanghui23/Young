import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'uvi site',
  description: 'font end of uvi.',
  lastUpdated: true, // 开启上次更新时间
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  themeConfig: {
    // Type is `DefaultTheme.Config`
    logo: '/logo.svg',
    siteTitle: 'uvi site',
    nav: [
      { text: '主页', link: '/' },
      { text: '开发指南', link: '/guide/' },
      { text: '项目集', link: '/project-pool/' },
      { text: '官方文档', link: '/official-document/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开发指南',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '开发规范', link: '/guide/development-style' },
          ],
        },
      ],
      '/project-pool/': [
        {
          text: '项目集',
          items: [
            { text: '简介', link: '/project-pool/' },
            { text: '项目端口配置', link: '/project-pool/project-port' },
          ],
        },
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present uvi',
    }
  }
})
