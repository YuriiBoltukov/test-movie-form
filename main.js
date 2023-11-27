const MOVIE_URL = 'https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10';
const MOVIE_HEADERS =  { 'X-API-KEY': 'P3RTS9G-2YH4XAV-QWKVWAZ-E9XFFDQ' };

/**
 * The main function that initializes the movie service, renderer, and feedback form view.
 */
function main() {
  /**
   * Instance of the MovieService class for fetching movies from the Kinopoisk API.
   */
  const movieService = new MovieService(MOVIE_URL, MOVIE_HEADERS);
  /**
   * Instance of the MovieRenderer class for rendering movies in the specified block.
   */
  const movieRenderer = new MovieRenderer('movieBlock');
  /**
   * Instance of the FeedbackFormView class for handling and validating feedback forms.
   */
  const feedbackFormView = new FeedbackFormView('feedbackForm');

  /**
   * Asynchronous function to load movies from the Kinopoisk API and render them.
   */
  async function loadMovies() {
    const movies = await movieService.getMovies();
    movieRenderer.renderMovies(movies);
  }

  loadMovies();
  feedbackFormView.init();
}

document.addEventListener('DOMContentLoaded', main);