import { Route, Routes } from "react-router";
import PokeList from "./pages/PokeList";
import Welcome from "./pages/Welcome";
import PokeShow from "./pages/PokeShow";
import Nav from "./components/Nav";
import "./App.css";

// you need to have <Routes></Routes> (this is plural and has an opening and closing tage becuase it wraps all the routes)
// <Route /> is singular  (no s) and it is self closing this is what will line what the user sees in the url bar with what we are showing in the browser
// it requires both the path which is what tells us what is in the url bar and the element which tells us what we are rendering

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pokelist" element={<PokeList />} />
        <Route path="/pokemon/:name" element={<PokeShow />} />
      </Routes>
    </>
  );
}

export default App;
