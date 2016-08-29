/*设置编译范围*/
fis.set('project.files', ['static/**']);
/*设置发布路径*/
fis.match(/\/static\/(.*)/i, {
  release: '/staticPub/$1',
  /*所有资源发布时产出到 /staticPub 目录下*/
  url: '/staticPub/$1' /*所有资源访问路径设置*/
});
/*指定模块化插件*/
fis.hook('commonjs', {
  paths: {
    jquery: '/static/common/js/mod/jquery',
    react: '/static/common/js/mod/react'
  }
});
/*指定哪些目录下的文件执行define包裹*/
fis.match('/static/common/js/mod/**', {
  isMod: true
});
fis.match('/static/common/components/**', {
  isMod: true,
  // packTo: '/staticPub/common/components/components_pkg.js'
});
fis.match('/static/helloworld/**', {
  isMod: true
});
/*模块化加载器配置*/
fis.match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: true, //js&css打包成一个文件
    sourceMap: true, //是否生成依赖map文件
    useInlineMap: true //是否将sourcemap作为内嵌脚本输出
  })
});
/*支持react*/
fis.match('*.jsx', {
  rExt: '.js',
  parser: fis.plugin('typescript', {})
});
// //MD5 戳
// fis.match('*.{css,js,es6}', {
//     useHash: true
// });
// //排除min.js
// fis.match(/.*\/+(?:(?!\.min).)+\.(?:js|es6)$/i, {
//     // fis-optimizer-uglify-js 插件进行压缩，已内置
//     optimizer: fis.plugin('uglify-js')
// });

// ////排除min.css
// fis.match(/.*\/+(?:(?!\.min).)+\.css$/i, {
//     // 给匹配到的文件分配属性 `useSprite`
//     useSprite: true,
//     // fis-optimizer-clean-css 插件进行压缩，已内置
//     optimizer: fis.plugin('clean-css')
// });

// fis.match('*.es6', {
//     parser: fis.plugin('babel'),
//     rExt: '.js', // 代码编译产出时，后缀改成 .js
//     domain: 'http://s4.fx.kgimg.com'
// });

// /*css域名配置*/
// fis.match('*.css', {
//     domain: 'http://s5.fx.kgimg.com'
// });

// /*js域名配置*/
// fis.match('*.js', {
//     domain: 'http://s4.fx.kgimg.com'
// });

// //压缩html
// fis.match('*.html',{
//     optimizer: fis.plugin('htmlmin',{
//         minifyJS: false,
//         minifyCSS:false,
//         ignoreCustomComments:[/ignore/i,/STYLE_PLACEHOLDER/i]
//     })
// });

// // 压缩 index.html 内联的 css
// fis.match('**.html:css', {
//     optimizer: fis.plugin('clean-css')
// });

// // 压缩 index.html 内联的 js
// fis.match('**.html:js', {
//     optimizer: fis.plugin('uglify-js')
// });

// /*图片文件域名配置*/
// fis.match('*.{jpg,png,jpeg,gif,webp}', {
//     useHash: true,
//     domain: ['http://s1.fx.kgimg.com', 'http://s2.fx.kgimg.com', 'http://s3.fx.kgimg.com'],
//     url: '/staticPub/images/$1',
//     release: '/staticPub/images/$1'
// });