import { useState } from "react";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";

import { imageBaseUrl } from "../utils/api";
import NavBAr from "./NavBar";

const Header = ({ movie }) => {
  const [trailerId, setTrailerId] = useState("");

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
        const url = await MovieTrailer(movie?.title);
        const trailerUrl = url ? url.split("=")[1] : "";
        setTrailerId(trailerUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <NavBAr />

        <div className="header-content">
          <h1>{movie?.title}</h1>
          <div className="header-button">
            <button onClick={() => trailerHandler(movie)}>
              {trailerId ? "Stop Trailer" : "Play "}
            </button>
          </div>

          <p className="description">
            {movie?.overview && movie?.overview.substring(0, 300)}...
          </p>
        </div>
      </header>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </>
  );
};

export default Header;
