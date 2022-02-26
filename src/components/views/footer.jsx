var React = require('react');

//フッタの定義
class Footer extends React.Component {
    
    render() {
        return (
            <footer style={{ textAlign: "center" }}>
                <hr />
                <p class="copyright">&copy; <span id="idCopyRight"></span> Rikigigasu </p>
            </footer>
        );
    }
}

//module.exports = Footer;
export default Footer;