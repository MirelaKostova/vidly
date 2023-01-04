import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import "../../node_modules/font-awesome/css/font-awesome.css";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import filter from "../utils/filter";
import sort from "../utils/sort";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    itemsToShow: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(
      (currMovie) => currMovie._id !== movie._id
    );
    this.setState({ movies });
  };

  handleLike = (movieObj) => {
    const likedMovie = [...this.state.movies];

    const index = likedMovie.indexOf(movieObj);
    likedMovie[index] = { ...movieObj };
    likedMovie[index].liked = !likedMovie[index].liked;

    this.setState({ movies: likedMovie });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      itemsToShow,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (count === 0)
      return <p className="fw-bold">There are no movies in the database.</p>;

    const filteredMovies = filter(selectedGenre, allMovies);
    const sortedMovies = sort(filteredMovies, sortColumn);
    const movies = paginate(sortedMovies, currentPage, itemsToShow);

    return (
      <div className="main-wrapper">
        <div className="d-flex m-3 ">
          <ListGroup
            items={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            onGenreSelect={this.handleGenreSelect}
          />

          <div className="table-wrapper mx-3">
            <p className="fw-bold">
              There are{" "}
              <span className="text-danger">{filteredMovies.length}</span>{" "}
              movies in the database.
            </p>

            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <Pagination
              itemsCount={filteredMovies.length}
              itemsToShow={itemsToShow}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
