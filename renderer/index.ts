import process from 'node:process'

export default defineEventHandler(async (ctx) => {
  if (process.env.NODE_ENV === 'development') {
    const [serverAddress] = ctx.context.vite.resolvedUrls.local

    return html`<!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NVVT Stack</title>
        </head>
        <body>
          <div id="app"></div>

          <!-- if development -->
          <script type="module" src="${serverAddress}@vite/app"></script>
          <script type="module" src="${serverAddress}app/main.ts"></script>
        </body>
      </html> `
  }

  type Manifest = Record<string, { css: string[]; file: string; isEntry: boolean }>

  const manifest = await useStorage('assets:vite').getItem<Manifest>(`manifest.json`)
  if (!manifest) {
    setResponseStatus(ctx, 500)
    return `Missing manifest`
  }

  const entryChunk = Object.values(manifest).find((entry) => entry.isEntry)
  if (!entryChunk) {
    setResponseStatus(ctx, 500)
    return `Missing manifest entry`
  }

  const cssLinks = entryChunk.css
    .map((link) => `<link rel="stylesheet" href="/${link}" />`)
    .join('\n')
  const scriptLinks = `<script type="module" src="/${entryChunk.file}"></script>`

  const template = html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NVVT Stack</title>

        ${cssLinks}
      </head>
      <body>
        <div id="app"></div>

        ${scriptLinks}
      </body>
    </html> `

  return template
})
