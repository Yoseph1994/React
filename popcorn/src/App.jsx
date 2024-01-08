import { useState } from "react";

//components
import { NavBar, Logo, NumResults, Search } from "./components/NavBar";
import Loader from "./components/Loader";
import FetchError from "./components/FetchError";
import { Main, Box } from "./components/Main";
import { MovieList } from "./components/MovieList";
import { WatchedSummary } from "./components/WatchedSummary";
import { WatchedMoviesList } from "./components/WatchedMovie";
import { MovieDetail } from "./components/MovieDetails";

//custom hooks
import { useFetchMovies } from "./hooks/useFetchMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const { movies, isLoading, fetchError } = useFetchMovies(query);
  // lazy initializing for watched state
  //using custom hook
  const [watched, setWatched] = useLocalStorageState([], "key");
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleClose() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched([...watched, movie]);
  }

  function handleRemoveWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !fetchError && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {fetchError && <FetchError message={fetchError} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetail
              selectedId={selectedId}
              onCloseMovie={handleClose}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteMovie={handleRemoveWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
