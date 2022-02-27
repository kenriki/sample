var React = require('react');

//コンテンツ１の定義
class MenuContent1 extends React.Component {
  render() {
    return (
      <>
        <div className="css-menu-wrap">
          <a href="http://rikigigasu.blog.fc2.com/">エンジニア備忘録ブログ</a>
          <div>
            <a href="https://twitter.com/ricchan_fight?ref_src=twsrc%5Etfw" className="twitter-follow-button"
              data-show-count="false">Follow @ricchan_fight</a>
            <script async src="https://platform.twitter.com/widgets.js"></script>
          </div>
          <div>
            <div className="line-it-button" data-lang="ja" data-type="like"
              data-url="http://rikigigasu.blog.fc2.com/" className="blockScreenOff">
            </div>
            <script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async"
              defer="defer"></script>
          </div>
        </div>
      </>
    );
  }
}

//module.exports = Content1;
export default MenuContent1;