var React = require('react');

//コンテンツ１の定義
class ContentArea1 extends React.Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "left" }}>
          <div>
            <fieldset className="css-width css-border-style">
              <legend>HTML5について</legend>
              <a name="html"></a>
              <ul>
                <li>metaタグの種類</li>
                <li>SEOにおける文章校正</li>
                <li>HTML5タグの種類</li>
                <li>属性値の命名規則</li>
                <li>DOMについて</li>
                <li>DOMツリー</li>
              </ul>
              <hr></hr>
              <div>
                <h3>便利ツール</h3>
                <a href="https://validator.w3.org/nu/" target="_blank">Nu HTMLチェッカー</a>
              </div>
            </fieldset>
          </div>
          <hr></hr>
          <div>
            <fieldset className="css-width css-border-style">
              <legend>CSS3について</legend>
              <a name="css"></a>
              <ul>
                <li>セレクタとプロパティと値の関係</li>
                <li>セレクタの命名規則</li>
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