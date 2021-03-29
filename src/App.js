import './styles/App.css';
import './styles/queries.css'
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Tagline from './components/Tagline'
import Shorten from './components/Shorten'
import Statistics from './components/Statistics'
import Boost from './components/Boost'
import Footer from './components/Footer'
import axios from 'axios'
import ShortenLinks from './components/ShortenLinks';

const App = () => {

  const [inputUrl, setInputUrl] = useState('');
  const [shortLink, setShortLink] = useState([]);
  const [haveShortLink, setHaveShortLink] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiStartPoint = 'https://api.shrtco.de/v2/shorten?url=';

  useEffect(() => {
    if(inputUrl){
    axios.get(apiStartPoint + inputUrl)
      .then(res => {
        setIsLoading(false);
        setShortLink(res.data.result);
        setHaveShortLink(true);
      })
      .catch(() => {
        setIsLoading(false)
        setShowError(true)
      })
    }
  }, [inputUrl])

  console.log(shortLink)

  return (
    <div className="App">
      <section className="main">
        <div className="main-container">
          <Navbar />
          <Tagline />
          <Shorten 
          setInputUrl={setInputUrl} 
          setShowError={setShowError} 
          showError={showError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          />
        </div>
      </section>
      <section className='statistics'>
        <div className="statistics-wrapper">
          {haveShortLink && <ShortenLinks smallLink={shortLink.full_short_link} originalLink={shortLink.original_link}/>} 
          <Statistics />
        </div>
      </section>
      <section className="boost">
        <Boost />
      </section>
      <section className='footer'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
