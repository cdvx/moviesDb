import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const Cart =()=>{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    setMovies(movies);
  },[])

  return (
    <div className="row no-gutters justify-content-center">
      {movies && movies.length ? (
        movies.map((movie, i) => (
          <div key={i}>
            <Movie
              title={movie.title}
              id={movie.id}
              poster_path={movie.poster_path}
              cart={true}
            />
          </div>
        ))
      ) : (
        <div>
          <br />
          <p>No Items In The Cart</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
