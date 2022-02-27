var React = require('react');

//ヘッダの定義
class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>My Engineer Exhibition Wiki</h1>
          <hr />
        </header>
      </>
    );
  }
}

//module.exports = Header;
export default Header;