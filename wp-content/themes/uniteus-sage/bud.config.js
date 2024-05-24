/**
 * @typedef {import('@roots/bud').Bud} bud
 *
 * @param {bud} app
 */
module.exports = async (app) => {
  app
    /**
     * Application entrypoints
     *
     * Paths are relative to your resources directory
     */
    .entry({
      app: {
        import: ['@scripts/app', '@styles/app'],
        publicPath: '/wp-content/themes/uniteus-sage/public/'
      },
      time: {
        import: ['@scripts/time'],
        publicPath: '/wp-content/themes/uniteus-sage/public/'
      },
      editor: ['@scripts/editor', '@styles/editor'],
    })

    /**
     * These files should be processed as part of the build
     * even if they are not explicitly imported in application assets.
     */
    .assets('images')

    /**
     * These files will trigger a full page reload
     * when modified.
     */
    .watch('resources/views/**/*', 'app/**/*')

    /**
     * Target URL to be proxied by the dev server.
     *
     * This should be the URL you use to visit your local development server.
     */
    .proxy('https://unite-us-test.local/')

    /**
     * Development URL to be used in the browser.
     */
    .serve('https://unite-us-test.local/');
};
