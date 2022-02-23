
# Create React Appを使わないReact導入手順

Create React App
└ Create React App とは Facrbook が提供している CLI ツールで用意されたテンプレートを元にアプリケーションの雛形を生成してくれるものです。

```vim
mkdir sample
cd sample
npm init -y
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm install -D @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/preset-env babel-loader
npm install react react-dom
npm install -D @babel/preset-react
```

/sample
├── node_modules/
├── package-lock.json
├── package.json
└── src
│   ├── Hello.jsx
│   ├── app.js
│   └── index.html
└── webpack.config.js

## html のテンプレート
```index.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>exampleApp</title>
</head>
<body>
    <noscript>
      <strong>javascriptを有効にしてください</strong>
    </noscript>
    <div id="app" />
</body>
</html>
```

## エントリポイントとなる js
```app.js
import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById("app")
);

```

## React コンポーネント
```Hello.jsx
import React from "react";

const Hello = () => <h1>こんにちは！</h1>;
export default Hello;

```

```webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
        static: {
            directory: path.resolve(__dirname, "./dist"),
        }
    }
};

```

## webpack の設定
> module.rules のところで js と jsx のファイルを babel-loader に読ませる設定をしてます。
> babel-loader にはプリセットの設定を行いました。
> また plugin に HtmlWebpackPlugin を追加して html のテンプレートを指定しています。


## ビルド

```vim
$ npx webpack --config webpack.config.js
```

> このままでは動作確認できないので開発サーバーの設定(devServer)を webpack.config.js の末尾に追加

```vim
$ npx webpack serve --config webpack.config.js
｢wds｣: Project is running at http://localhost:8080/
｢wds｣: webpack output is served from /
｢wds｣: Content not from webpack is served from /Users/sumishin/Documents/work/system_blog/dist
...
｢wdm｣: Compiled successfully.
```


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## ビルドや開発サーバーの立ち上げ 
> npm-script にしておくと楽です。  
> package.json を開き、scripts の部分を以下の様に編集します。


```package.json
  "main": "index.js",
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack serve --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
```

### うまく設定できているか確認

```vim
$ npm run
Lifecycle scripts included in sample:
  test
    echo "Error: no test specified" && exit 1
  start
    webpack serve --config webpack.config.js

available via `npm run-script`:
  build
    webpack --config webpack.config.js
  dev
    webpack -w
```

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## npm ERR! の対処法

### ステップ１

```
$ npm install -g npm
```

> npm自体のアップデートをする。

### ステップ2

```
$ rm -rf node_modules
```

> 既存のモジュールを削除する。

### ステップ3

```
$ npm install

```

> プロジェクトの依存関係を再インストールする。

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## GithubPageにReactページ表示させる
> GitHub Pagesは特定なBranchを使って静的なファイルをサービスします。
したがってbuildフォルダのためだけのBranchを作る必要があります。
次のコマンドを実行してbuildフォルダだけ新しいBranchにアップロードします。

```vim
git subtree push --prefix build/ origin gh-pages
```