import React from 'react';
import ContentArea1Header from './views/header';
import ContentArea1 from './views/content1';

import '../../css/styleMain.css';

//classNameでcssを指定
class ContentArea1App extends React.Component {
    render() {
        return (
            <>
                <ContentArea1Header />
                <ContentArea1 />
            </>
        );
    }
}

//module.exports = App;
export default ContentArea1App;