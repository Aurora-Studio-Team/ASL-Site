import { defineConfig } from 'vitepress'
import { nav } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aurora Star Launcher",
  description: "美观、快速、安全的Minecraft启动器",
  base: "/",
  
  themeConfig: {
    logo: ' img/asl.png',
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar: {
      'help': [
        {
          text: '帮助文档',
          items: [
            { text: '简介', link: '/help' },
            { text: '快速开始', link: '/helps/get-started' },
          ]
        },
        {
          text: '启动',
          items: [
            { text: '启动', link: '/helps/start-games/start-game' },
            { text: 'Microsoft登录', link: '/helps/start-games/microsoft-login' },
            { text: '离线登录', link: '/helps/start-games/offline-login' },
            { text: '统一通行证登录', link: '/helps/start-games/TONGYITONGXINGZHENG-login' },
            { text: 'Ygg(LittleSkin)登录', link: '/helps/start-games/Ygg-login' },
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
      'version': [
        {
          text: '更新日志',
          items: [
            { text: '简介', link: '/version' },
          ]
        },
        {
          text: '最新版本',
          items: [
            { text: '[NEW] Beta v1.0.1', link: '/versions/Beta-v1.0.1' },
          ]
        },
        {
          text: '历史版本',
          items: [
            { text: 'Beta v1.0.1', link: '/versions/Beta-v1.0.1' },
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
