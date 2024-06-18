import process from 'node:process'
import { consola } from 'consola'
import type { ViteDevServer } from 'vite'

export default defineNitroPlugin(async (nitroApp) => {
  if (process.env.NODE_ENV === 'production') {
    return
  }

  const { createServer } = await import('vite')
  let start = Date.now()
  const vite = await createServer()

  await vite.listen()

  nitroApp.hooks.hook('request', (event) => {
    event.context.vite = vite
  })

  const time = Date.now() - start
  consola.success(`Vite Server built in ${time}ms`)
})

declare module 'h3' {
  interface H3EventContext {
    vite?: ViteDevServer
  }
}
