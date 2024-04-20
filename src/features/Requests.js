const API_KEY='987f644e376d2f2932f34b41f5e0f601'

const requests ={
  // fetchTrading:`/trending/movie/week?api_key=${API_KEY}&language=es-ES`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`,
  fetchAmazonPrimeOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=1024&language=es-ES`,
  // fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`,
  fetchCrimeMovies:`discover/movie?api_key=${API_KEY}&with_genres=80&language=es-ES`,
  fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35&language=es-ES`,
  fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`,
  fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`,
  fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99&language=es-ES`,

}

export default requests