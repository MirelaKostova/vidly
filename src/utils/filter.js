const filter = (selectedGenre, allMovies) => {
  return selectedGenre && selectedGenre._id
    ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
    : allMovies;
};

export default filter;
