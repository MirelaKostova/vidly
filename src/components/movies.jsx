import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "../../node_modules/font-awesome/css/font-awesome.css";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import List from "./common/list";

class Movies extends Component {
  state = {
    movies: getMovies(),
    itemsToShow: 4,
    currentPage: 1,
  };

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

  handleGenreSort = (movieObj, currGenreId) => {
    const movies = [...this.state.movies];
    const filteredMovies = movies.filter((el) => el.genre._id === currGenreId);

    this.setState({ movies: filteredMovies });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, itemsToShow, movies: allMovies } = this.state;

    if (count === 0)
      return <p className="fw-bold">There are no movies in the database.</p>;

    const movies = paginate(allMovies, currentPage, itemsToShow);

    return (
      <>
        <div className="main-wrapper d-flex m-3">
          <List onClick={() => this.handleGenreSort()} />
          <>
            <div className="table-wrapper mx-3">
              <p className="fw-bold">
                There are <span className="text-danger">{count}</span> movies in
                the database.
              </p>
              <hr className="hr" />
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th />
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {movies.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          status={movie.liked}
                          onClick={() => this.handleLike(movie)}
                        />
                      </td>

                      <td>
                        <button
                          onClick={() => this.handleDelete(movie)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination
                itemsCount={count}
                itemsToShow={itemsToShow}
                currentPage={currentPage}
                // selected={this.selected}
                onPageChange={this.handlePageChange}
              />
            </div>
          </>
        </div>
      </>
    );
  }
}

export default Movies;
