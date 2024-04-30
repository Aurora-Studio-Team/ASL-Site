/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '首页', link: '/' },
    { text: '下载', link: '/download' },
    { text: '帮助文档', link: '/help' },
    { text: '条款', link: '/article' },
    { text: '更新日志', link: '/version' },
    { text: '相关链接', link: '/aboutlink' },
    { text: '关于', link: '/about' },
]