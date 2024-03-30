import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aurora Star Launcher",
  description: "美观、快速、安全的Minecraft启动器",
  base: "/",
  
  themeConfig: {
    logo: ' img/asl.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download' },
      { text: '帮助', link: '/help' },
      { text: '条款', link: '/article' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      'help': [
        {
          text: '启动',
          items: [

          ]
        },
        {
          text: '下载',
          items: [

          ]
        },
        {
          text: '联机',
          items: [

          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aurora-Studio-Team/Aurora-Star-Launcher-ASL' }
    ],

    footer: {
      message: '此软件以GPL3.0免费开源，任何人不得以任何形式非法分布此软件的任何副本！',
      copyright: 'Copyright © Aurora Studio & THZ同学.'
    }
  }
})
