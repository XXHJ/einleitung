
const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack (config) {
        config.resolve.alias
            .set('~', resolve('src/views'))
            .set('#', resolve('src/components'))
            .set('style', resolve('src/assets/style'))
            .set('svg', resolve('src/assets/svg'))
            .set('img', resolve('src/assets/img'))
            .set('icon', resolve('src/assets/icon'))
            .set('utils', resolve('src/utils'))
            .set('model', resolve('src/model'))
            .set('config', resolve('src/config'))
            .set('api', resolve('src/api'));

        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icon'))
            .end();

        config.module
            .rule('svg-icon')
            .test(/\.(svg)(\?.*)?$/)
            .include.add(resolve('src/assets/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end()
            .use('svgo-loader')
            .loader('svgo-loader')
            .options({
                externalConfig: resolve('svgo.yml'),
            })
            .end();
    },
}
