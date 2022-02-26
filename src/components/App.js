import React from 'react';
import Header from './views/Header';
import Body from './views/Body';
import Content1 from './views/Content1';
import Footer from './views/Footer';
import NewsContent from './views/News';

import '../css/styleMain.css';

//classNameでcssを指定
class App extends React.Component {
    render() {
        return (
            <div>
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

//module.exports = App;
export default App;