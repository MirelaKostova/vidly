import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import MovieForm from "./components/movieForm";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" render={() => navigate("/movies")} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
