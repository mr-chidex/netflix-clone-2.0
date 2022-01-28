/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";

import { imageBaseUrl } from "../utils/api";

const MovieRow = ({ movies, type }) => {
  const [trailerId, setTrailerId] = useState("");
  const cardSliderRef = useRef(null);

  const shiftCardLeft = () => {
    cardSliderRef.current?.scrollBy({ left: -500, top: 0, behavior: "smooth" });
  };

  const shiftCardRight = () => {
    cardSliderRef.current?.scrollBy({ left: 500, top: 0, behavior: "smooth" });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const trailerHandler = async (movie) => {
    try {
      if (trailerId) {
        setTrailerId("");
      } else {
        const url = await MovieTrailer(movie.title);
        const trailerUrl = url ? url.split("=")[1] : "";
        setTrailerId(trailerUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    movies && (
      <>
        <h1 className="movie-type">{type}</h1>
        <section className="movie-row">
          <span className="arrow-left arr" onClick={shiftCardLeft}>
            &lt;
          </span>
          <div className="slider-container" ref={cardSliderRef}>
            <div className="card-container">
              {movies?.map((movie) => (
                <div key={movie.id} className="movie-container">
                  <div
                    className="image-container"
                    onClick={() => trailerHandler(movie)}
                  >
                    <img
                      src={`${imageBaseUrl}${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <span className="movie-title">{movie.title}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="arrow-right arr" onClick={shiftCardRight}>
            &gt;
          </span>
        </section>
        {trailerId && <YouTube videoId={trailerId} opts={opts} />}
      </>
    )
  );
};

export default MovieRow;
