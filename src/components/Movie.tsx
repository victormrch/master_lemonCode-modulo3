import React from "react";
import classes from "./movieStyle.scss";
import { MovieEntity } from "../model";

interface Props {
  movie: MovieEntity;
}

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export const Movie: React.FC<Props> = (props) => {
  const { movie } = props;
  console.log(movie);
  return (
    <div className={classes.movie}>
      <img src={IMG_API + movie.poster_path} alt={movie.title} />
      <div className={classes.movieInfo}>
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
      </div>
      <div className={classes.movieOver}>
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
