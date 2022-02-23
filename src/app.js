var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./views/header.jsx');
var Body = require('./views/body.jsx');
var Content1 = require('./views/content1.jsx');
var Footer = require('./views/footer.jsx');
var NewsContent = require('./views/news.jsx');
require('./css/main.css');

//classNameでcssを指定
class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div>
          <Body />
          <Content1 />
          <NewsContent />
        </div>
        <Footer />
      </div>
    );
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
