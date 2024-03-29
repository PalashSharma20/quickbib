const mix = require("laravel-mix");
const path = require("path");

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
  .alias({
    "@": path.join(__dirname, "resources/js"),
    vue$: path.join(__dirname, "node_modules/vue/dist/vue.esm-bundler.js"),
  })
  .js("resources/js/main.js", "public/js")
  .vue();
