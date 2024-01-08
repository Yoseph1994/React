import { useState, useEffect } from "react";
export function useFetchMovies(query) {
  const KEY = "ec7b3e36";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  useEffect(() => {
    //clearing input for data fetching (to avoid Race-codition)
    //create AbortController
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setFetchError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong!!!");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setFetchError("");
      return;
    }
    // callback?.(); //optional callback fn passed from parent
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, fetchError };
}
