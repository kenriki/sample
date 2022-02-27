var React = require('react');

//最新ニュースの定義
class NewsContent extends React.Component {
  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <div className="css-brank-height">
              <fieldset className="css-width css-border-style">
                  <legend>News</legend>
                  <ul>
                      <li>SNS(Facebook)追加しました</li>
                      <li>トップページのスタイルを修正</li>
                  </ul>
              </fieldset>
          </div>
        </div>
      </>
    );
  }
}

//module.exports = NewsContent;
export default NewsContent;