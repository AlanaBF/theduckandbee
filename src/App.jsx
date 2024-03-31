import Home from "./pages/Home";
import Blog from "./pages/Blog";
import PathwayToWellness from "./pages/PathwayToWellness"; // Make sure to import this page
import NotFound from "./pages/NotFound";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
            <Route path="/PathwayToWellness" element={<PathwayToWellness />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
