import apiService from "../app/apiService";

const key = "a5c02fc4fa6ba77606206d61795d16bb";

export const authAPI = {
  createRequestToken() {
    return apiService.get(`/authentication/token/new?api_key=${key}`);
  },
  login(username, password, request_token) {
    return apiService.post(
      `/authentication/token/validate_with_login?api_key=${key}`,
      { username, password, request_token }
    );
  },
  createSession(request_token) {
    return apiService.post(`/authentication/session/new?api_key=${key}`, {
      request_token,
    });
  },
  logout(session_id) {
    return apiService.delete(`/authentication/session?api_key=${key}`, {
      data: { session_id },
    });
  },
};

export const movieAPI = {
  getSearchMovie(movie, page) {
    return apiService.get(
      `/search/movie?api_key=${key}&language=en-US&query=${movie}&page=${page}&include_adult=false`
    );
  },
  getMovie(movieId) {
    return apiService.get(`/movie/${movieId}?api_key=${key}&language=en-US`);
  },
  getVideos(movieId) {
    return apiService.get(
      `/movie/${movieId}/videos?api_key=${key}&language=en-US`
    );
  },
  getSimilar(movieId) {
    return apiService.get(
      `/movie/${movieId}/similar?api_key=${key}&language=en-US&page=1`
    );
  },
  getPopularMovieList() {
    return apiService.get(`/movie/popular?api_key=${key}&language=en-US`);
  },
  getTopMovieList(page = 1) {
    return apiService.get(
      `/movie/top_rated?api_key=${key}&language=en-US&page=${page}`
    );
  },
  getUpcomingMovie(page = 1) {
    return apiService.get(
      `/movie/upcoming?api_key=${key}&language=en-US&page=&${page}`
    );
  },
  getGenreMovie() {
    return apiService.get(`/genre/movie/list?api_key=${key}&language=en-US`);
  },
  getDiscoveryMovie(page) {
    return apiService.get(
      `/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
  },
  getTrending(date) {
    return apiService.get(`/trending/movie/${date}?api_key=${key}`);
  },
};

export const userProfileAPI = {
  getFavoriteMovies(session_id, page = 1) {
    return apiService.get(
      `/account/{account_id}/favorite/movies?api_key=${key}&session_id=${session_id}&language=en-US&sort_by=created_at.asc&page=${page}`
    );
  },
  getFavoriteTv(session_id, page = 1) {
    return apiService.get(
      `/account/{account_id}/favorite/tv?api_key=${key}&language=en-US&session_id=${session_id}&sort_by=created_at.asc&page=${page}`
    );
  },
  markFavorite(media_id, session_id, favorite, media_type = "movie") {
    return apiService.post(
      `/account/{account_id}/favorite?api_key=${key}&session_id=${session_id}`,
      { media_id, media_type, favorite }
    );
  },
  getMovieAccountStates(movieId, session_id) {
    return apiService.get(
      `/movie/${movieId}/account_states?api_key=${key}&session_id=${session_id}`
    );
  },
  getTvAccountStates(tvId, session_id) {
    return apiService.get(
      `/tv/${tvId}/account_states?api_key=${key}&language=en-US&session_id=${session_id}`
    );
  },
};

export const tvAPI = {
  getSearchTvList(tv, page = 1) {
    return apiService.get(
      `/search/tv?api_key=${key}&language=en-US&query=${tv}&page=${page}&include_adult=false`
    );
  },
  getTv(tvId) {
    return apiService.get(`/tv/${tvId}?api_key=${key}&language=en-US`);
  },
  getVideos(tvId) {
    return apiService.get(`/tv/${tvId}/videos?api_key=${key}&language=en-US`);
  },
  getSimilar(tvId) {
    return apiService.get(
      `/tv/${tvId}/similar?api_key=${key}&language=en-US&page=1`
    );
  },
  getPopularTvList() {
    return apiService.get(`/tv/popular?api_key=${key}&language=en-US`);
  },
  getTopTvList(page = 1) {
    return apiService.get(
      `/tv/top_rated?api_key=${key}&language=en-US&page=${page}`
    );
  },

  getGenreTv() {
    return apiService.get(`/genre/tv/list?api_key=${key}&language=en-US`);
  },
  getDiscoveryTv(page) {
    return apiService.get(
      `/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    );
  },
};
