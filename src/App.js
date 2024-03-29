import { Routes, Route, useNavigate } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/common/loginForm/loginForm";
// import Footer from "./components/common/Footer/footer";
import Register from "./components/common/register";
import NewMovieForm from "./components/newMovieForm";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <NavBar />
        <Routes>
          <Route index element={<Movies />} />
          <Route path="/" render={() => navigate("/movies")} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:ißd" element={<MovieForm />} />
          <Route path="/movies/new" element={<NewMovieForm />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
