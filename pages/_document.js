/**
 * HTML정의 or React Portal과 함께 사용할 진입 지점등의 요소 추가
 */
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    render(){
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id='notifications'></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;