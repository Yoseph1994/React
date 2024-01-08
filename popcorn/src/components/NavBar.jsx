import { useRef } from "react";
import { useKeyPressEventHandler } from "../hooks/useKeyPressEventHandler";

export function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>የፊልም ግዜ</h1>
    </div>
  );
}

export function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

export function Search({ query, setQuery }) {
  //selecting elements in react
  // using custom hook
  const el = useRef(null);
  useKeyPressEventHandler("Enter", function () {
    if (document.activeElement === el.current) return;
    el.current.focus();
    setQuery("");
  });
  // useEffect(() => {
  //   function callback(e) {
  //     if (e.code === "Enter") {
  //       if (document.activeElement === el.current) return;
  //       el.current.focus();
  //       setQuery("");
  //     }
  //   }
  //   document.addEventListener("keydown", callback);

  //   return () => document.removeEventListener("keydown", callback);
  // }, [setQuery]);
  // older way
  // useEffect(() => {
  //   const el = document.querySelector(".search");
  //   el.focus();
  //   console.log(el);
  // }, []);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={el}
    />
  );
}
