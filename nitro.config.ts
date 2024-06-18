//https://nitro.unjs.io/config
export default defineNitroConfig({
  renderer: './renderer',
  publicAssets: [
    {
      dir: './dist',
      maxAge: 60 * 60 * 24 * 365
    },
    // TODO: only on development server
    {
      baseURL: '/app/assets',
      dir: './app/assets'
    }
  ],
  serverAssets: [
    {
      baseName: 'vite',
      dir: './dist/.vite'
    }
  ],
  runtimeConfig: {
    envExample: '',
  }
});
