/**
 * A class for rendering movie data in a specified container.
 */
class MovieRenderer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  /**
   * Renders an array of movies in the specified container.
   */
  renderMovies(movies) {
    this.container.innerHTML = '';
    movies.forEach(movie => {
      const movieElement = this.createMovieElement(movie);
      this.container.appendChild(movieElement);
    });
  }

  /**
   * Creates an HTML element for a single movie.
   */
  createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const imgElement = document.createElement('img');
    imgElement.src = movie.poster.url;
    imgElement.alt = movie.name;

    const titleElement = document.createElement('p');
    titleElement.textContent = movie.name;

    movieElement.appendChild(imgElement);
    movieElement.appendChild(titleElement);

    return movieElement;
  }
}