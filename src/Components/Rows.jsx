import '../styles/Rows.css';
import axios from '../features/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Rows = ({title, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  const urlBase = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  console.log(movies);

  return (
    <div className='rows'>
      <h2 className='rows__title'>{title}</h2>
      <div className='rows__posters'>
        {movies.map(movie => (
          <Link to='/descripcionprueba' target="_blank" className='rows__poster' key={movie.id}>
            <img className='rows__poster__img' key={movie.id} src={`${urlBase}${movie.poster_path}`} alt={movie.name} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Rows