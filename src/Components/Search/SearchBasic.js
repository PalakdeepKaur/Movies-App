import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchMovie extends Component {
  render() {
    return (
      <div className="def">
        <h2>Please initiate a search...</h2>
      </div>
    );
  }
}
export default withRouter(SearchMovie);