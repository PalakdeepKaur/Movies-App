import React, { Component } from "react";
import { makeRequest } from "../service/api";
import { withRouter } from "react-router-dom";
import SearchCard from "./SearchCard";
import Search_Default from "./Search_Default";

class SearchMulti extends Component {


  constructor(props) {
    super(props);
    this.getQuery = this.getQuery.bind(this);
  }

  state = {
    listType: this.props.listType,
    searchdata: [],
    searchTerm: "",
    loading: true,
    query:this.props.query

  };

  async componentDidMount() {
    let q = await this.getQuery();
    console.log( q );
    if( q ){
      let getMovies = await makeRequest("search/multi", q );
      this.setState({ searchdata: getMovies.results });
      if (typeof getMovies !== "undefined") {
        this.setState({ loading: false });
      }
    }
  }

  getQuery(){
    let search = '?'+window.location.href.split('?')[1];
    console.log( search );
    let params = new URLSearchParams( search );
    console.log( params );
    let query =  params.has('query') ? params.get('query') : "" ;
    console.log( query );
    return query ;
  }

  render() {
    const { listType, searchdata, loading } = this.state;
    return (
      <div>
        {/* <SearchHeader select={"multi"} /> */}
        {loading === false && typeof searchdata !== "undefined" ? (
          <div className="row">
            {searchdata.map(function (value, index) {
              return (
                <Card3 className={"col-md-3"} key={index} searchdata={value} />
              );
            })}

            { searchdata.length === 0 ?
                <p>No results found</p>
                : null
            }


          </div>
        ) : (
            <Search_Default/>
        )}
      </div>
    );
  }
}
export default withRouter(SearchMulti);
