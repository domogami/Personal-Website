// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/domogami/Documents/GitHub/Personal-Website/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/domogami/Documents/GitHub/Personal-Website/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/domogami/Documents/GitHub/Personal-Website/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/domogami/Documents/GitHub/Personal-Website/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/layout-index.json"),
  "404.json": require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/404.json"),
  "blog.json": require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/blog.json"),
  "index.json": require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/index.json"),
  "page-2.json": require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/page-2.json"),
  "404-html.json": require("/Users/domogami/Documents/GitHub/Personal-Website/.cache/json/404-html.json")
}