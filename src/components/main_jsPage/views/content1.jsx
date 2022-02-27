var React = require('react');

//コンテンツ１の定義
class ContentArea1 extends React.Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "left" }}>
          <div>
            <fieldset className="css-width css-border-style">
              <legend>JavaScript</legend>
              <a name="html"></a>
              <ul>
                <li>ES2015(ES6)とは</li>
                <div className="css-sparator"></div>
                <div><span>
                  ECMAScriptはJavaScriptの中核仕様を抜き出して標準化したもの<br></br>
                  開発当初のJavascriptは、ブラウザによる独自の拡張が多く、互換性が低かったため、<br></br>
                  Ecma Internationalが中心となりECMAScriptが開発された</span>
                  <div>
                    [公式サイト]
                    <a href="http://www.ecma-international.org/ecma-262/6.0/index.html" target="_blank">http://www.ecma-international.org/ecma-262/6.0/index.html</a>
                  </div>
                </div>
                <div className="css-sparator"></div>
                <li>ES2015の対応状況</li>
                <a href="http://kangax.github.io/compat-table/es6/" target="_blank">参考URL</a>
                <div className="css-sparator"></div>
                <li>何故ES2015で書くのか</li>
                <div className="css-li-bef">
                  <li>便利な機能、構文が追加され、従来より簡潔かつ明瞭な構文で記述できるようになったから。</li>
                </div>
                <div className="css-li-bef">
                  <li>主要な機能、構文を覚える程度なら学習コストはそこまで高くないから。</li>
                </div>
                <div className="css-li-bef">
                  <li>フレームワーク等と違ってすぐに廃れるものではないから。</li>
                </div>
                <div className="css-li-bef">
                  <li>ES2015で記述されているコードを理解するため。</li>
                </div>
                <div className="css-sparator"></div>
                <li>ES2015で追加された機能、構文</li>
                <div className="css-sparator"></div>
                <li>DOM動的生成</li>
                <div className="css-sparator"></div>
                <div>
                  <a href="https://developer.mozilla.org/ja/docs/Web/API/Document/createElement" target="_blank">document.createElement について</a>(外部URL)
                </div>
                <pre>
                  <code>
                    var element = document.createElement(&quot;div&quot;);
                  </code>
                  <code>
                    element.id = &quot;id&quot;;
                  </code>
                  <code>
                    element.innerHTML = &quot;hogehoge&quot;;
                  </code>
                  <code>
                    element.style.backgroundColor = &#039;red&#039;;
                  </code>
                  <code>
                    var objBody = document.getElementsByTagName(&quot;body&quot;).item(0);
                  </code>
                  <code>
                  // body要素にdivエレメントを追加
                    objBody.appendChild(element);
                  </code>
                </pre>
                <div className="css-sparator"></div>
                <li>CSSのclassを差し替え</li>
                <div className="css-sparator"></div>

                <div className="css-sparator"></div>
                <h2>JavaScriptの関数種類</h2>
                <li>無名関数</li>
                <div className="css-sparator"></div>
                <li>即時関数</li>
                <div className="css-sparator"></div>
                <li>クロージャ</li>
                <div className="css-sparator"></div>
                <h2>各ライブラリ、フレームワーク</h2>
                <li>JQuery、JqueyUI</li>
                <div className="css-sparator"></div>
                <pre>[公式サイト]<a href="https://code.jquery.com/" target="_blank">https://code.jquery.com/</a></pre>
                <div className="css-sparator"></div>
                <li>Angular JS</li>
                <div className="css-sparator"></div>
                <pre>[公式サイト]<a href="https://angular.jp/" target="_blank">https://angular.jp/</a></pre>
                <li>knock out JS</li>
                <div className="css-sparator"></div>
                <pre>[公式サイト]<a href="http://kojs.sukobuto.com/docs/introduction" target="_blank">http://kojs.sukobuto.com/docs/introduction</a></pre>
                <li>i18next : サイトの国際化対応</li>
                <div className="css-sparator"></div>
                <pre>[公式サイト]<a href="https://www.i18next.com/" target="_blank">https://www.i18next.com/</a></pre>
                <li>npm JS</li>
                <div className="css-sparator"></div>
                <pre>[公式サイト]<a href="https://docs.npmjs.com/" target="_blank">https://docs.npmjs.com/</a></pre>
                <div className="css-sparator"></div>
                <h2>JSON文字列とJSON整形について</h2>
                <li>JSONの取り扱い</li>
                <div>
                  <input type="text" className="json" style={{ width: "500px" }} placeholder='{"key1":"テキスト1","key2":"テキスト2","key3":[{"testKey1":"message"}]}' />
                </div>
                <div>
                  <button id="ID_BTN_JSON">JSON整形</button>
                </div>
                <div>
                  <textarea className="result" rows="10" cols="70" placeholder='{"key1":"テキスト1"}'></textarea>
                </div>
                <div className="css-sparator"></div>

                <div className="css-sparator"></div>
                <h2>Base64変換</h2>
                <input type="text" id="id_1" />
                <input type="button" id="id_convert_btob_ja" value="エンコード変換" />
                <div id="result1"></div>

                <input type="text" id="id_2" />
                <input type="button" id="id_convert_atob_ja" value="デコード変換" />
                <div id="result2"></div>
              </ul>

            </fieldset>
          </div>
        </div>
      </>
    )
  }

}

export default ContentArea1;