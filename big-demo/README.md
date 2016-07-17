big-demo
  1.mkdir big-demo
  cd big-demo
  git init
  gitignore
  atom webpack.config.js
  atom index.html
  src/  touch index.js
  2.配置webpack
    1.npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
    2.touch .babelrc   
      .babelrc内容：{
        "presets": ["es2015","react"]
      }
    3.package.json  "scripts": {
      "build": "./node_modules/.bin/webpack  -w"
      //-w 代表监听
    }
    4.npm i -D react react-dom
  3.export default;------导出
    ctrl+/----打开新终端
