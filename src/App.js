import React from "react";
import {Component} from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { HashRouter as Router, withRouter , Switch, Route} from "react-router-dom";
import {  TabPanel, TabList } from "react-tabs";


import "./App.css";
import {makeRequest} from "./Services/api";
import MovieNowPlaying from "./Components/Movies/movieNowPlaying";
import MoviePopular from "./Components/Movies/moviePopular";
import MovieUpcoming from "./Components/Movies/movieUpcoming";
import MovieTopRated from "./Components/Movies/movieTopRated";
import TvAiringToday from "./Components/TV/tvAiringToday";
import TvOnAir from "./Components/TV/tvOnAir";
import TvPopular from "./Components/TV/tvPopular";
import TvTopRated from "./Components/TV/tvTopRated";
import SearchMovie from "./Components/Search/SearchMovie";
import SearchMulti from "./containers/SearchMulti";
import SearchTv from "./containers/SearchTv";
import SearchContainer from "./Components/Search/SearchContainer";



class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  }
  state = {
    selectedTab : 0,
    searchQuery: "",
    loading : true
  };

  handleClick( value , value2 ) {
    console.log( value , value2 );
    this.setState({ selectedTab : value2  });

    if( value2 === 0 ){
      this.props.history.push('/movie/now_playing');
    }else if( value2 === 1 ){
      this.props.history.push('/search/movie');
    }else if( value2 === 2 ){
      this.props.history.push('/tv/on_the_air');
    }

  }

  async componentDidMount() {

    let location = this.props.location.pathname;
    if( !location && location.indexOf('movie') !== -1 ){
      this.setState({ selectedTab : 0  });
      this.props.history.push('/movie/now_playing');
    }else if( !location && location.indexOf('search') !== -1 ){
      this.setState({ selectedTab : 1  });
      this.props.history.push('/search/movie');
    }else if( !location && location.indexOf('tv') !== -1 ){
      this.setState({ selectedTab : 2  });
      this.props.history.push('/tv/on_the_air');
    }

    this.setState( { loading : false } );
  }

  async searchClicked(e , searchQuery , searchType ) {
    console.log( "Jass " , searchQuery , searchType );

    this.setState({loading: true });
    await this.props.history.push("/search/" +searchType+"?query="+searchQuery );
    this.setState({loading: false });
  }

  render() {
    return (
      <div className="App">

        { !this.state.loading ?
            <Router>
              <div>
                <header className="App-header">
                  <h1 className="title">React Movies App</h1>
                </header>
                <div className="searchArea">
                  <SearchContainer searchClicked={this.searchClicked} />
                </div>

                <main className="main">

                  <Paper square>
                    <Tabs
                        value={this.state.selectedTab}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleClick}
                        aria-label=" tabs example"
                    >
                      <Tab label="Movie" />
                      <Tab label="Search" />
                      <Tab label="TV" />
                    </Tabs>
                  </Paper>

                  <div className="tabs">
                    <Switch>

                      <Route path="/movie/popular">
                        <MoviePopular />
                      </Route>
                      <Route path="/movie/top_rated">
                        <MovieTopRated />
                      </Route>
                      <Route path="/movie/upcoming">
                        <MovieUpcoming />
                      </Route>
                      <Route path="/movie/now_playing">
                        <MovieNowPlaying />
                      </Route>
                      <Route exact path="/">
                        <MovieNowPlaying />
                      </Route>

                      <Route path="/search/movie">
                        <SearchMovie searchQuery={this.state.searchQuery} />
                      </Route>
                      <Route path="/search/multi">
                        <SearchMulti searchQuery={this.state.searchQuery}/>
                      </Route>
                      <Route path="/search/tv">
                        <SearchTv searchQuery={this.state.searchQuery}/>
                      </Route>

                      <Route path="/tv/on_the_air">
                        <TvOnAir />
                      </Route>
                      <Route path="/tv/popular">
                        <TvPopular />
                      </Route>
                      <Route path="/tv/top_rated">
                        <TvTopRated />
                      </Route>

                      <Route path="/tv">
                        <TvAiringToday />
                      </Route>

                    </Switch>
                  </div>
                </main>
              </div>
            </Router>
            : <p>Loading...</p>
        }
      </div>
    );
  }
}

export default withRouter(App);
