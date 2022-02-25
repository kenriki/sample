var React = require('react');

//コンテンツ１の定義
class Content1 extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <img src="https://www.his-j.com/kokunai/chubu/tour/slides/oka/037.jpg" class="css-img-style" />
        </div>
        <div>
          <p>エンジニアのためのプログラミング(Java, JavaScript, HTML5, CSS3, Pythonなど)等の情報まとめサイトです。</p>
          <p>いろいろな情報を共有して、より良い現場ライフになることが狙いです。</p>
          <div class="fb-share-button" data-href="https://kenriki.github.io/sample/" data-layout="button_count" data-size="small"
            data-mobile-iframe="true">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fkenriki.php.xdomain.jp%2Fdoc%2F&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore">シェア</a>
          </div>
          <hr></hr>
          <div>
            <a href="./sampleTop.html">技術のまとめページへ</a>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

module.exports = Content1;