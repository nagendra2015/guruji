import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {SSRProvider} from 'react-bootstrap';


function MyApp({ Component, pageProps }) {



  return <Component {...pageProps} />
}

export default MyApp
