import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
