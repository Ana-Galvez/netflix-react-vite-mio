import Rows from '../Components/Rows';
import Footer from '../Components/Footer'
import requests from '../features/Requests';
import Banner from '../Components/Banner';
import Nav from '../Components/Nav';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Banner />
      <Rows title='NETFLIX' fetchUrl={requests.fetchNetflixOriginals} />
      <Rows title='AMAZON PRIME' fetchUrl={requests.fetchAmazonPrimeOriginals} />
      <Rows title='ACCIÓN' fetchUrl={requests.fetchActionMovies} />
      <Rows title='CRIMEN' fetchUrl={requests.fetchCrimeMovies} />
      <Rows title='COMEDIA' fetchUrl={requests.fetchComedyMovies} />
      <Rows title='TERROR' fetchUrl={requests.fetchHorrorMovies} />
      <Rows title='ROMANCE' fetchUrl={requests.fetchRomanceMovies} />
      <Rows title='DOCUMENTALES' fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  )
}

export default Home