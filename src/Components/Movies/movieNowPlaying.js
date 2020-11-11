import React, { Component } from "react";
import { makeRequest } from "../../Services/api";
import MovieCard from "./moviesCard";
import MovieHeader from "./movieContainer";
import { withRouter } from "react-router-dom";
import SearchHeader from "../Search/SearchContainer";

class MovieNowPlaying extends Component {
  state = {
    listType: this.props.listType,
    moviedata: [],
    loading: true,
  };

  async componentDidMount() {
    let getMovies = await makeRequest("movie/now_playing");
    this.setState({ moviedata: getMovies.results });
    if (typeof getMovies !== "undefined") {
      this.setState({ loading: false });
    }
  }

  render() {
    const { listType, moviedata, loading } = this.state;
    return (
      <div>
        <MovieHeader select={"now_playing"} />
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
export default withRouter(MovieNowPlaying);