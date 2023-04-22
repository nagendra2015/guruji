import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="My SEO React app with Next JS"
                    />
                    <meta name="keywords" content="next react seo" />
                    <meta name="author" content="Ryan Dhungel" />
                    <link rel="stylesheet" href="/static/styles.css" />

                    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />
                    
                </head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
