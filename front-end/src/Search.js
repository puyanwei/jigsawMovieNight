import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    let self = this;
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=121486b23802e0b6735125ff1892f340&sort_by_popularity.desc"
    )
      .then(function(results) {
        return results.json();
      })
      .then(function(data) {
        self.setState({
          movies: data.results
        });
      });
  }

  render() {
    return (
      <div className="Search">
        <h2>Search for a Movie</h2>
        <div>
          <form className="searchBox" onSubmit={this.onFormSubmit}>
            <input type="text" name="userInput" />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="PopularList" />
        {this.state.movies.map(movie => <li>{movie.title}</li>)}
      </div>
    );
  }
}

export default Search;
