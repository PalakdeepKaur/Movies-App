import React, { Component } from "react";
import { makeRequest } from "../../Services/api";
import MovieCard from "./moviesCard";
import MovieContainer from "./movieContainer";
import { withRouter } from "react-router-dom";

class MovieTopRated extends Component {
  state = {
    listType: this.props.listType,
    moviedata: [],
    loading: true,
  };

  async componentDidMount() {
    let getMovies = await makeRequest("movie/top_rated");
    this.setState({ moviedata: getMovies.results });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, moviedata, loading } = this.state;
    return (
      <div>
        <MovieContainer select={"top_rated"} />
        {loading === false && typeof moviedata !== "undefined" ? (
          <div className="row">
            {moviedata.map(function (value, index) {
              return (
                <MovieCard className={"col-md-3"} key={index} moviedata={value} />
              );
            })}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    );
  }
}
export default withRouter(MovieTopRated);