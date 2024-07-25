// webpack.mix.js

let mix = require('laravel-mix');
let webpack = require('webpack');

mix.js('src/js/app.js', 'dist')
    .vue({ version: 3 })
    .setPublicPath('dist')
    .version();

mix.postCss('src/css/main.css', 'dist');

// Extend Webpack configuration to define Vue feature flags
mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
        })
    ]
});
