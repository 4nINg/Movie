import axios from "axios"
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

export const movies = {
  getMovie: id => api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () =>
    api.get("movie/popular", {
      params: { api_key: "584467f43959cb7bd6c03220e9d02eb7", language: "en-US" }
    }),
  getUpcoming: () =>
    api.get("movie/upcoming", {
      params: { api_key: "584467f43959cb7bd6c03220e9d02eb7", language: "en-US" }
    }),
  getNowPlaying: () =>
    api.get("movie/now_playing", {
      params: { api_key: "584467f43959cb7bd6c03220e9d02eb7", language: "en-US" }
    }),
  searchMovies: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
}

export const tv = {
  getShow: id => api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () =>
    api.get("tv/popular", {
      params: { api_key: "584467f43959cb7bd6c03220e9d02eb7", language: "en-US" }
    }),
  getTopRated: () =>
    api.get("tv/top_rated", {
      params: { api_key: "584467f43959cb7bd6c03220e9d02eb7", language: "en-US" }
    }),
  getAiring: () =>
    api.get("tv/airing_today", {
      params: { api_key: "584467f43959cb7bd6c03220e9d02eb7", language: "en-US" }
    }),
  searchTv: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
}
