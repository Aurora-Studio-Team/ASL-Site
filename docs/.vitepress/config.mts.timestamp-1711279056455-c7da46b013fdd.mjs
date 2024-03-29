// docs/.vitepress/config.mts
import { defineConfig } from "file:///C:/Users/Administrator/Desktop/%E6%96%87%E4%BB%B6/ASLSITE/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "Aurora Star Launcher",
  description: "\u7F8E\u89C2\u3001\u5FEB\u901F\u3001\u5B89\u5168\u7684Minecraft\u542F\u52A8\u5668",
  themeConfig: {
    logo: "/img/asl.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u4E0B\u8F7D", link: "/download" },
      { text: "\u5E2E\u52A9", link: "/help" }
    ],
    sidebar: {
      "/help/": [
        {
          text: "\u4ECB\u7ECD",
          items: [
            { text: "\u4ECB\u7ECD", link: "/help/" },
            { text: "\u56E2\u961F", link: "/help/" }
          ]
        },
        {
          text: "\u5E2E\u52A9",
          items: []
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    footer: {
      message: "\u6B64\u8F6F\u4EF6\u4EE5GPL3.0\u514D\u8D39\u5F00\u6E90\uFF0C\u4EFB\u4F55\u4EBA\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u975E\u6CD5\u5206\u5E03\u6B64\u8F6F\u4EF6\u7684\u4EFB\u4F55\u526F\u672C\uFF01",
      copyright: "Copyright \xA9 Aurora Studio & THZ\u540C\u5B66."
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcXHU2NTg3XHU0RUY2XFxcXEFTTFNJVEVcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcXHU2NTg3XHU0RUY2XFxcXEFTTFNJVEVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC8lRTYlOTYlODclRTQlQkIlQjYvQVNMU0lURS9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6IFwiQXVyb3JhIFN0YXIgTGF1bmNoZXJcIixcbiAgZGVzY3JpcHRpb246IFwiXHU3RjhFXHU4OUMyXHUzMDAxXHU1RkVCXHU5MDFGXHUzMDAxXHU1Qjg5XHU1MTY4XHU3Njg0TWluZWNyYWZ0XHU1NDJGXHU1MkE4XHU1NjY4XCIsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbG9nbzogJy9pbWcvYXNsLnBuZycsXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnXHU5OTk2XHU5ODc1JywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdcdTRFMEJcdThGN0QnLCBsaW5rOiAnL2Rvd25sb2FkJyB9LFxuICAgICAgeyB0ZXh0OiAnXHU1RTJFXHU1MkE5JywgbGluazogJy9oZWxwJyB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2hlbHAvJzogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NEVDQlx1N0VDRCcsICBcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnXHU0RUNCXHU3RUNEJywgbGluazogJy9oZWxwLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTZFMlx1OTYxRicsIGxpbms6ICcvaGVscC8nIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1RTJFXHU1MkE5JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MnIH1cbiAgICBdLFxuXG4gICAgZm9vdGVyOiB7XG4gICAgICBtZXNzYWdlOiAnXHU2QjY0XHU4RjZGXHU0RUY2XHU0RUU1R1BMMy4wXHU1MTREXHU4RDM5XHU1RjAwXHU2RTkwXHVGRjBDXHU0RUZCXHU0RjU1XHU0RUJBXHU0RTBEXHU1Rjk3XHU0RUU1XHU0RUZCXHU0RjU1XHU1RjYyXHU1RjBGXHU5NzVFXHU2Q0Q1XHU1MjA2XHU1RTAzXHU2QjY0XHU4RjZGXHU0RUY2XHU3Njg0XHU0RUZCXHU0RjU1XHU1MjZGXHU2NzJDXHVGRjAxJyxcbiAgICAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCBcdTAwQTkgQXVyb3JhIFN0dWRpbyAmIFRIWlx1NTQwQ1x1NUI2Ni4nXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxWCxTQUFTLG9CQUFvQjtBQUdsWixJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUE7QUFBQSxJQUVOLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxZQUFZO0FBQUEsTUFDaEMsRUFBRSxNQUFNLGdCQUFNLE1BQU0sUUFBUTtBQUFBLElBQzlCO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLGdCQUFNLE1BQU0sU0FBUztBQUFBLFlBQzdCLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFNBQVM7QUFBQSxVQUMvQjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPLENBRVA7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLGFBQWE7QUFBQSxNQUNYLEVBQUUsTUFBTSxVQUFVLE1BQU0scUNBQXFDO0FBQUEsSUFDL0Q7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==