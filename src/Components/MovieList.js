import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 bg-black">
      <h1 className="text-4 py-4 font-bold text-white">{title}</h1>
      <div className="flex hover:overflow-x-scroll">
        <div className="flex">
          {movies?.map(movie=>
            (
              <MovieCard posterPath={movie.poster_path} />

            ))}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
