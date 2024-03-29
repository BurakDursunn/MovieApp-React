import React from "react";
import { Link } from 'react-router-dom';

const MovieList = (props) => {

  const truncate = (string, maxLength) => {
    if (!string) {
      return null;
    }
    if (string.length <= maxLength) {
      return string;
    }
    return `${string.substring(0, maxLength)} ...`
  }

  return (

    <div className="row">

      {props.movies.map((movie, i) => (

        <div className="col-md-3" key={i}>

          <div className="card mb-4 shadow-sm ">
            <img src={movie.imageURL} className="card-img-top img-fluid " style={{ height: "400px" }} alt="sample" />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{truncate(movie.overview, 150)}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" onClick={(event) => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">
                  Delete
                </button>

  
                <Link type="button"
                      className="btn btn-md btn-outline-secondary"
                      to={`edit/${movie.id}`}
                >Edit
                </Link>


                <h2>
                  <span className="badge bg-info">{movie.rating}</span>
                </h2>
              </div>

            </div>
          </div>
        </div>

      ))}
    </div>

  )

};

export default MovieList; 