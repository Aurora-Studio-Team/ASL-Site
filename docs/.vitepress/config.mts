import { defineConfig } from 'vitepress'
import { nav } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aurora Star Launcher",
  description: "美观、快速、安全的Minecraft启动器",
  base: "/",

  head: [
    ['link',{ rel: 'icon', href: 'img/asl.png'}],
  ],

  themeConfig: {
    logo: ' img/asl.png',
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

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

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aurora-Studio-Team/Aurora-Star-Launcher-ASL' },
      { icon: {svg: '<svg t="1714531320385" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4270" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="4271"></path></svg>'}, link: 'https://space.bilibili.com/1910324323' },
      { icon: {svg: '<svg t="1714539358409" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3196" width="200" height="200"><path d="M630.125714 1001.033143l-78.774857-153.088H262.144l-24.868571 158.866286-155.794286-22.966858 21.284571-135.899428H0V694.857143h126.683429l59.830857-382.756572H0V159.012571h210.432L235.300571 0l155.794286 22.966857-21.284571 135.972572h389.705143L783.945143 0l155.794286 22.966857-20.918858 136.045714H1024v153.088h-128.731429L836.461714 694.857143H1024v153.088h-211.017143L785.92 1024l-155.794286-22.966857z m105.837715-689.005714H345.965714L285.988571 694.857143h265.289143l104.96 135.899428 79.725715-518.656z" fill="#28C9DA" p-id="3197"></path></svg>'}, link: 'https://pd.qq.com/s/674y1rjrl' },
      { icon: 'x', link: 'https://twitter.com/fanrklin' },
      { icon: 'discord', link: 'https://discord.gg/JupBE5QC' },
      { icon: 'facebook', link: 'https://www.facebook.com/profile.php?id=61559123580368' },
    ],

    footer: {
      message: '此软件以GPL3.0免费开源，任何人不得以任何形式非法分布此软件的任何副本！',
      copyright: 'Copyright © Aurora Studio & THZ同学.'
    }
  }
})
