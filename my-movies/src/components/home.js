import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

const Home = () => {
  // <div></div> Jsx içeriğini dive almak yerine React.Fragment kullanacağız, Aynı hiyerarşide çoklu element almamızı sağlar
  let filteredMovies = this.state.movies.filter((movie) => {
    return (
      movie.title
        .toLowerCase()
        .indexOf(this.state.searchQuery.toLowerCase()) !== -1
    );
  });
  return (
    <div>
      <AddMovie />
      <div className="row">
        <div className="col-lg-12">
          <SearchBar searchMovieProp={this.searchMovie} />
        </div>
      </div>

      <MovieList deleteMovieProp={this.deleteMovie} movies={this.filteredMovies} />
    </div>
  );
};

export default Home;
