import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=121486b23802e0b6735125ff1892f340&sort_by_popularity.desc"
    )
      .then(function(results) {
        return results.json();
      })
      .then(
        function(data) {
          this.setState({
            movies: data.results
          });
        }.bind(this)
      );
  }

  render() {
    return (
      <div>
        <h2>Popular Movies from MovieDB</h2>
        <div className="PopularList" />
        {this.state.movies.map(movie => <li>{movie.title}</li>)}
      </div>
    );
  }
}

export default List;
