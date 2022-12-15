import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import "../../node_modules/font-awesome/css/font-awesome.css";
import Like from "./common/like";
import Pagination from "./common/pagination";

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
    // console.log("page->", page);
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, itemsToShow } = this.state;

    if (count === 0)
      return <p className="fw-bold">There are no movies in the database.</p>;
    return (
      <>
        <p className="fw-bold">
          There are <span className="text-danger">{count}</span> movies in the
          database.
        </p>
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
            {this.state.movies.map((movie) => (
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
      </>
    );
  }
}

export default Movies;
