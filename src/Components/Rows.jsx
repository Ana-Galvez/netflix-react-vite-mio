import '../styles/Rows.css';
import axios from '../features/axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Rows = ({title, fetchUrl}) => {
  const [scrollPosition,setScrollPosition]=useState(0);
  const rowScrollRef =useRef();

  function handleScroll(scrollValue){
    const newPosition =scrollPosition + scrollValue;
    setScrollPosition(newPosition);
    rowScrollRef.current.scrollLeft = newPosition;
  }

  const [movies, setMovies]   = useState([]);
  const urlBase = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  // console.log(movies);

  return (
    <div className='rows'>
      <h2 className='rows__title'>{title}</h2>
      <div className='rows__posters' ref={rowScrollRef}>
        <img onClick={()=>{handleScroll(-400)}} className='rows__arrows left'  src="../../public/images/icons8-flecha-izquierda-48.png" alt="Flecha izquierda" />
        {movies.map(movie => (
          <Link to='/descripcionprueba' target="_blank" className='rows__poster' key={movie.id}>
            <img className='rows__poster__img' src={`${urlBase}${movie.poster_path}`} alt={movie.name} />
            {/* <p className='rows__movieName'>{(!movie.name?movie.title:movie.name)}</p> */}
          </Link>
        ))}
        <img onClick={()=>{handleScroll(400)}} className='rows__arrows right' src="../../public/images/icons8-flecha-derecha-48.png" alt="Flecha derecha" />
      </div>
    </div>
  )
}

export default Rows