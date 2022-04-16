import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  // function handleClick(event) {
  //   console.log(event.pageY)
  // }

  const truncateOverview = (string, maxLength) => {
    // if (!string) {
    //   return null
    // } else if (string.length <= maxLength){
    //   return string
    // } else return `${string.substring(0, maxLength)} ...`
    // // ilk return alınacağı için else falan gerekmez!!
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-lg-4" key={i}>
          <div className="card mb-4 shadow-sm">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
              className="card-img-top"
              alt="Sample-Pic"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                {truncateOverview(movie.overview, 120)}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={() => props.deleteMovieProp(movie)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                {/* Link router içinde çalışıyor */}
                <Link
                  to={`edit/${movie.id}`}
                  type="button"
                  className="btn btn-md btn-outline-primary"
                  style={{ float: "right" }}
                >
                  About
                </Link>
                <h2>
                  <span className="badgebadge-info">{movie.vote_average}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
