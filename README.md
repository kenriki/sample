# 仕事で役に立つサンプルをまとめ
## Java

1. Java最新版ダウンロード  
[Download Path](https://www.java.com/ja/download/windows-64bit.jsp)

2. Java環境構築(windows版) パスの設定
「コントロールパネル」> 「システムとセキュリティ」 > 「システム」 > 「システムの詳細設定」 
  
ユーザー環境変数  
> 「詳細設定」タブ > 「環境変数」 > 新規ボタンをクリック ⇒ JAVA_HOMEの設定  
(変数名) :JAVA_HOME  
(変数値) :C:\Program Files\Java\jdk1.x.x_xxx  
  
システム環境変数  
> 変数項目の「Path」を見つけたら、
編集ボタンをクリック  
出てきたポップアップ画面で変数Pathの設定の一番最初に「%JAVA_HOME%\bin;」を追記します。  
※　最初に設定されていた内容を変更、または削除しないように気をつけてください。  
もし、誤って、変更や削除をしてしまった場合は、「キャンセル」ボタンをクリックして、前の画面に戻ってください。  
(変数名) :Path  
(変数値) :%JAVA_HOME%\bin;既存の物はそのまま…..;  

「OK」ボタンをクリックして、パスの設定は完了です。 これで、パスの設定は完了しました。  
  
Java環境構築を行っている場合は、次は Eclipseのインストールです。
Android環境構築を行っている場合、次は Android Studioのインストールです。

3. Eclipse
        [URL](http://mergedoc.osdn.jp/)

4. framework を用いて開発を行う

   ・Spring MVC
        [URL](https://spring.io/)

        ※ 目的: Spring MVCの、詳細な使い方の解説に入る前に、実際にSpring MVCに触れることで、 Spring MVCを用いたWebアプリケーションの開発に対するイメージをつかむ。

        1. アプリケーションの作成
        2. フォームオブジェクトの作成
        3. Controllerの作成
        4. JSPの作成
        5. 入力チェックの実装

## JavaScript
1. EcmaScript6
2. JSON
3. backbone
4. angular


-----

## TypeScript
1. TypeScriptは静的型付けができるJavaScript  
    > number型, string型, boolean型
2. どんな値でも格納できるany型
    > any型を使うときは、よく考えて使う必要

3. その他の型
    > 他にも型はいろいろある。`「null型」`と`「undefined型」`は、JavaScriptのそれらと同じと思ってもらって問題ない。`「void型」`は関数に戻り値が無いことを示すときに利用する。それから、いわゆる列挙型の`「enum型」`も利用できる。他には`オブジェクト型`と分類される型がある。これには、クラスやインターフェースなどいろいろなものが含まれる。
4. 「型推論」で型アノテーションの省略  
*omikuji.ts*
```typescript
function playOmikuji(age : number, name: string ) {
  var kuji = "";
  if (age === 17) {
    kuji = "大吉";
  } else {
    kuji ="凶";
  }
  return name + "さんの運勢は" + kuji + "です";
}

var age = 17;
var name = "testさん";

var unsei = playOmikuji(age, name);　// unseiはstring型として解釈される
```
5. TypeScriptの「クラス」と「インターフェース」
   > C#やJavaに近い考え方でクラスを定義して利用できる

```typescript
class Hello {
  // メンバー変数
  public name: string;
  private _age: number;

  // getter／settter（プロパティ）
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }

  // コンストラクター
  constructor(name: string) {
    this.name = name;
  }

  // メンバーメソッド（パブリック）
  public say(): string {
    return this.getHelloString();
  }

  // メンバーメソッド（プライベート）
  private getHelloString(): string {
    return "Hello, " + name + "!";
  }
}

var hello = new Hello("testさん");
hello.age = 17;
var words = hello.say(); // "Hello , " + name + "!"
var age = hello.age; // 17
```

-----------------

## PHP  
1. PHPの概要  
2. テキストと数の操作  
3. 判定のと繰り返し  
4. 配列の操作  
5. 関数  
6. Webフォームの作成  
7. データベース  
8. クッキーとセッション  
9. 日付と時刻の取り扱い  
10. ファイルの操作  
11. XMLのパースと生成  
12. デバッキング  
13. クラスとオブジェクト  
14. 日本語処理  
15. 正規表現  

## HTML5



## CSS3


## Base64変換
![image](https://user-images.githubusercontent.com/19541785/148670383-99810817-1cc2-480b-9a53-53af6879e11a.png)

[https://kenriki.github.io/sample/](https://kenriki.github.io/sample/)



## Excel
1. [SUMIFS 関数](https://support.office.com/ja-jp/article/sumifs-関数-c9e748f5-7ea7-455d-9406-611cebce642b)
2. [INDIRECT関数](https://support.office.com/ja-jp/article/indirect-関数-474b3a3a-8a26-4f44-b491-92b6306fa261)
3. [VLOOKUP関数](https://support.office.com/ja-jp/article/vlookup-関数-0bbc8083-26fe-4963-8ab8-93a18ad188a1)
4. [CONCATENATE関数](https://support.office.com/ja-jp/article/concatenate-%E9%96%A2%E6%95%B0-8f8ae884-2ca8-4f7a-b093-75d702bea31d)
5. [INDEX関数]
6. [MATCH関数]

