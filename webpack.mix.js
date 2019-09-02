const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

require("laravel-mix-versionhash");

mix
  // .extract(
  // 	[
  // 		'vue',
  // 		'axios',
  // 		'vue-axios',
  // 		'@websanova/vue-auth',
  // 		'vue-router',
  // 		'vue-instantsearch'
  // 	]
  // )
  .webpackConfig({
    output: {
      chunkFilename: "js/[name].js"
    },
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": __dirname + "/resources/js"
      }
    }
  })
  .js("resources/js/main.js", "public/js");

if (mix.inProduction()) {
  mix.versionHash();
} else {
  mix.version();
}
