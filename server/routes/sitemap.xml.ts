import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://sc.xn--rhqx00c95nv9a.wiki'
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
