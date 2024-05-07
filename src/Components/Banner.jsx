import { useEffect, useState } from "react";
import "../styles/Banner.css";
import axios from "../features/axios";
import requests from "../features/Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncarDescripcion(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "100% 100%",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__img">
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Reproducir</button>
            <button className="banner__button">Mi Lista</button>
          </div>
          <h2 className="banner__description">
            {truncarDescripcion(movie?.overview, 150)}
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Banner;