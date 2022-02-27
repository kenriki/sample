var React = require('react');

//コンテンツ１の定義
class ContentArea1 extends React.Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "left" }}>
          <div>
            <fieldset className="css-width css-border-style">
              <legend>JAVA</legend>
              <a name="java"></a>
              <ul>
                <li>フレームワーク種類</li>
                <div className="css-sparator"></div>
                <div className="css-li-bef">
                  <li>SAStruts（Super Agile Struts）</li>
                </div>
                <p>SAStrutsは基本はJavaとTomcatがインストールされていれば開発できますが、Eclipseが導入されているとより簡易に開発することができます。 </p>
                <a href="http://sastruts.seasar.org/sastrutsplugin.html">SAStruts プラグイン公式</a>
                <div className="css-sparator"></div>
                <div className="css-li-bef">
                  <li>Spring MVC</li>
                </div>
                <a href="https://projects.spring.io/spring-framework/">Spring プラグイン公式</a>
                <div className="css-sparator"></div>
              </ul>
            </fieldset>
          </div>
        </div>
      </>
    );
  }
}

//module.exports = Content1;
export default ContentArea1;