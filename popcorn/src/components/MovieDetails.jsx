import { useEffect, useState } from "react";
import { useKeyPressEventHandler } from "../hooks/useKeyPressEventHandler";
import Loader from "./Loader";
import StarRating from "./StarRating";
export function MovieDetail({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const KEY = "ec7b3e36";
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const isAlreadyWatched = watched
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?&apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };

    fetchMovieDetails();
  }, [selectedId]);

  const { imdbRating, Runtime } = movie;
  function handleAdd() {
    const newMovie = {
      imdbID: selectedId,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      userRating,
      imdbRating: Number(imdbRating),
      Runtime: Number(Runtime.split("").at(0)),
    };
    onAddWatched(newMovie);
    onCloseMovie();
  }

  //change page top title on mount of the current component
  useEffect(() => {
    if (!movie.Title) return;
    document.title = `🥤 Movie | ${movie.Title}`;

    // return (document.title = `🥤 UsePopCorn`);
    // as a clean up function
    return () => (document.title = `🥤 UsePopCorn`);
  }, [movie.Title]);

  //Esc key listening to unmount Moviedetails
  useKeyPressEventHandler("escape", onCloseMovie);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={movie.Poster} alt={`Poster of ${movie.title}`} />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span>
                {movie.imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isAlreadyWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to watchlist
                    </button>
                  )}
                </>
              ) : (
                <p>Already Added & ⭐Rated: {watchedUserRating}</p>
              )}
            </div>

            <p>
              <em>{movie.Plot}</em>
              <p>Staring{movie.Actors}</p>
              <p>Directed by {movie.Director}</p>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
