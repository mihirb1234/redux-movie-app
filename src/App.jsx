import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import MovieDetail from "./components/movie-detail/movieDetail";
import PageNotFound from "./components/PageNotFound/pageNotFound";




function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container p-4 bg-slate-400">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
