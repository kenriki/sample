import React from 'react';
import Header from './views/header';
import Body from './views/body';
import Content1 from './views/content1';
import Footer from './views/footer';
import NewsContent from './views/news';

import '../../css/styleMain.css';

//classNameでcssを指定
class App extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Header />
                    <div>
                        <Body />
                        <Content1 />
                        <NewsContent />
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

//module.exports = App;
export default App;