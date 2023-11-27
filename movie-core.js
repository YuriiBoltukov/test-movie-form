/**
 * Service class for fetching movies from a remote server.
 */
class MovieService {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
  }

  /**
   * Fetches a list of movies from the remote server.
   */
  async getMovies() {
    try {
      const moviesJson = await fetch(this.url, { headers: this.headers });
      const movies = await moviesJson.json();
      return movies.docs;
    } catch (error) {
      console.error('Не удалось получить фильмы с сервера:', error);
      return [];
    }
  }
}