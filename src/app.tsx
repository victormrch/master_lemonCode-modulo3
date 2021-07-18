import React from "react";
import { MovieEntity } from "./model";
import { Movie } from "./components/Movie";

const FEATURE_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b766db798e47fc73c4d5e4e0e718c2d2&page1";

export const App = () => {
  const [movies, setMovies] = React.useState<MovieEntity[]>([]);

  React.useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
