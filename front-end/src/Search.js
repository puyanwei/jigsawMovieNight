import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  render() {
    return (
      <div className="Search">
        <h2>Popular Movies by MovieDB</h2>
        <div>
          <form className="searchBox" onSubmit={this.onFormSubmit}>
            <input type="text" name="userInput" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
