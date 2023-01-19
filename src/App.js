import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route render={() => <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
