import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { makeRequest } from "../../Services/api";
import SearchCard from "./SearchCard";
import ErrorContainer from "./ErrorContainer";

class SearchNoResult extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <ErrorContainer />
        </div>
      </div>
    );
  }
}
export default withRouter(SearchNoResult);