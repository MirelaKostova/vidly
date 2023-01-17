import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import "../../node_modules/font-awesome/css/font-awesome.css";
import ListGroup from "./common/listGroup";
import Message from "./message";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import filter from "../utils/filter";
import sort from "../utils/sort";

const defaultGenreValue = { _id: "", name: "All Genres" };

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    itemsToShow: 4,
    currentPage: 1,
    selectedGenre: defaultGenreValue,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [defaultGenreValue, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  getPageData() {
    const {
      currentPage,
      itemsToShow,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    const filteredMovies = filter(selectedGenre, allMovies);
    const sortedMovies = sort(filteredMovies, sortColumn);
    const movies = paginate(sortedMovies, currentPage, itemsToShow);

    return {
      totalCount: filteredMovies.length,
      data: movies,
      filteredMovies: filteredMovies,
    };
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, itemsToShow, sortColumn, selectedGenre } = this.state;

    const { totalCount, data: movies, filteredMovies } = this.getPageData();

    if (count === 0)
      return <p className="fw-bold">There are no movies in the database.</p>;

    return (
      <div className="main-wrapper">
        <div className="d-flex m-3 ">
          <ListGroup
            items={this.state.genres}
            selectedGenre={selectedGenre}
            onGenreSelect={this.handleGenreSelect}
          />
          <div className="table-wrapper mx-3">
            <Message filteredMovies={filteredMovies} />

            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
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
