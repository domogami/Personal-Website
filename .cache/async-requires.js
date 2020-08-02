// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/domogami/Documents/GitHub/Personal-Website/src/pages/404.js"),
  "component---src-pages-blog-js": require("gatsby-module-loader?name=component---src-pages-blog-js!/Users/domogami/Documents/GitHub/Personal-Website/src/pages/Blog.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/domogami/Documents/GitHub/Personal-Website/src/pages/index.js"),
  "component---src-pages-page-2-js": require("gatsby-module-loader?name=component---src-pages-page-2-js!/Users/domogami/Documents/GitHub/Personal-Website/src/pages/page-2.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/404.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/index.json"),
  "page-2.json": require("gatsby-module-loader?name=path---page-2!/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/page-2.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/domogami/Documents/GitHub/Personal-Website/.cache/layouts/index.js")
}