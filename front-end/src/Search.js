import React, {Component} from "react";

class Search extends Component {
  render() {
    return(

       <div className="Search">
      <h2>Search for a Movie</h2>
       <div>
       <form className="searchBox" onSubmit={this.onFormSubmit}>
       <input type="text" name="userInput" value="text" />
       <button type="submit">Search</button>
       </form>
       </div>
       </div>


    )
  }
}

export default Search
