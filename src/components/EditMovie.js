import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function EditMovie() {
  const [movie, setMovie] = useState({
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  });

  useEffect(() => {
    async function fetchData() {
      const id = window.location.pathname.replace("/edit/", "");
      const response = await axios.get(`http://localhost:3002/movies/${id}`);
      const movieData = response.data;
      setMovie(movieData);
    }
    fetchData();
  }, []); // Empty dependency array to only run once on mount

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = window.location.pathname.replace("/edit/", "");
    const { name, rating, overview, imageURL } = movie;
    const updatedMovie = {
      name,
      rating,
      overview,
      imageURL,
    };
    axios
      .put(`http://localhost:3002/movies/${id}`, updatedMovie)
      .then(() => {
        // navigate to home page on successful submission
        // use the history object from react-router-dom
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };


   

    const navigate = useNavigate();
  const onInputChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form." disabled />
        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="inputName">Name</label>
            <input type="text"
              className="form-control"
              name="name"
              value={movie.name}
              onChange={onInputChange} />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputRating">Rating</label>
            <input
              type="text"
              className="form-control"
              name="rating"
              value={movie.rating}
              onChange={onInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="imageURL"
              value={movie.imageURL}
              onChange={onInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
              value={movie.overview}
              onChange={onInputChange}></textarea>
          </div>
        </div>
        <input type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
      </form>
    </div>
  );

  }
  export default EditMovie;