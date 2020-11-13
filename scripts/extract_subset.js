const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')
const { Nuxt, Builder } = require('nuxt')

// const configPath = path.resolve(__dirname, '../nuxt.config.js')
// const config = require(configPath)
// const nuxt = new Nuxt(config)
const nuxt = new Nuxt()

const listen = async () => {
  await new Builder(nuxt).build()
  await nuxt.listen(4000, 'localhost')
}

const scrape = async (route) => {
  const { html } = await nuxt.renderRoute(route)
  const dom = new JSDOM(html)
  const { body } = dom.window.document

  body.querySelectorAll('script, style').forEach((el) => el.remove())

  return body.textContent
}

const scrapeAll = async (routes) => {
  const values = await Promise.all(routes.map((route) => scrape(route)))

  return values.join('')
}

const main = async () => {
  const routes = ['/', '/day1', '/day2']
  const subsetPath = path.resolve(__dirname, 'subset.txt')
  await listen()
  const text = await scrapeAll(routes)

  const dedup = (array) => [...new Set([...array])]
  fs.writeFileSync(subsetPath, dedup(text).join(''))

  nuxt.close()
  process.exit(0)
}

main()
