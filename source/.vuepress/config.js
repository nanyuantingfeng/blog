module.exports = {
  title: "",
  description: "",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }],
    ["link", { rel: "manifest", href: "/images/logo.png" }],
    ["link", { rel: "apple-touch-icon", href: "/images/logo.png" }],
    ["meta", { "http-quiv": "pragma", cotent: "no-cache" }],
    ["meta", { "http-quiv": "pragma", cotent: "no-cache,must-revalidate" }],
    ["meta", { "http-quiv": "expires", cotent: "0" }]
  ],
  serviceWorker: true,
  dest: "dist",
  base: "/",
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "文章", link: "/articles/" },
      { text: "github", link: "https://github.com/nanyuantingfeng" }
    ],
    sidebar: {
      "/articles/": ["/articles/a.html", "/articles/b.html"]
    },
    sidebarDepth: 2
  }
};
