
# コード即反映できるサイト
[https://codepen.io/pen?editors=1010](https://codepen.io/pen?editors=1010)


# html複数 出力 
npm i -D html-webpack-plugin


# webpack-cli について
npm i -D webpack-cli --save-dev

このパッケージは必須ではありませんが、このパッケージを使うとwebpack.config.jsの作成を始めとしてプロジェクトのひな型を作成することができます。
webpack-cliがバージョン3系の場合、webpack-cli/initのインストールにはバージョンを指定する必要があります。

# webpack-watched-glob-entries-plugin
npm i -D webpack-watched-glob-entries-plugin

# clean-webpack-plugin
npm i -D clean-webpack-plugin


# typescript
## typescriptのコマンドが使えない時

```vim
npm i typescript -g
tsc -v
```

#### 【コマンド】
```vim
c:\project> tsc -p d:\project
```
または
```vim
tsc  ./src/types/user.ts
```

#### 【説明】
> このコマンドを実行すると、TypeScriptプロジェクト配下に存在するすべてのファイルをコンパイルします。  
> オプションには「-p」と「TypeScriptプロジェクトのルートディレクトリ(tsconfig.jsonが配置される)」を指定します。  

#### 【コマンド】
```vim
c:\project> tsc -p d:\project -w
```

#### 【説明】
> 「-w」を付けた場合、ファイルの変更を監視し自動コンパイルします。  

#### 【実行結果】
> c:\project\tsconfing.jsonのコンパイル設定でコンパイル  
> c:\project\app1.ts ⇒ファイル変更の監視対象。変更があれば自動コンパイル。  
> c:\project\sub\app1.ts ⇒ファイル変更の監視対象。変更があれば自動コンパイル。  

> 監視を終了するにはコマンドプロンプトを閉じるか、VSCodeで実行している場合は、  
> コマンドパレットから「タスク：実行中のタスクの終了」を選択します。  

## 参考
[https://future-architect.github.io/typescript-guide/react.html](https://future-architect.github.io/typescript-guide/react.html)