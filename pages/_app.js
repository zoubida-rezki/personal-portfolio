import '@/styles/globals.css'
import { Nav , Footer} from "../components";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Nav />
        <Component {...pageProps} /> 
        <Footer />
      </>
      
  );
}
