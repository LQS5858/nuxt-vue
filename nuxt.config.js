module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test-nuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/style/variable.less'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
          rule.options.loaders.less.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/', '/\\.less$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })
    },
    vendor: ['element-ui', 'axios']
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  proxy: [[
    '/api/',
    {
      target: 'http://www.bituan.info:81/exchange-web-api',
      pathRewrite: {'^/api': ''}
    }
  ]
  ],
  plugins: [{
    src: '~plugins/element-ui/index.js',
    ssr: true
  }, {
    src: '~plugins/axios/index.js',
    ssr: true
  }],
  css:
    [{
      src: '~/assets/style/reset.less',
      lang: 'less'
    }, {
      src: '~/assets/style/variable.less',
      lang: 'less'
    }, {
      src: '~/assets/style/global.less',
      lang: 'less'
    },
      'element-ui/lib/theme-chalk/index.css']
}

