// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/src/pages/Blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/404.json"),
  "blog.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/blog.json"),
  "index.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/index.json"),
  "page-2.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/page-2.json"),
  "404-html.json": require("/Users/domogami/Documents/GitHub/Doms_Personal_Site/.cache/json/404-html.json")
}