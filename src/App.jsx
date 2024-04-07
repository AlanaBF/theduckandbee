import Home from "./pages/Home/index";
import Blog from "./pages/Blog/index";
import PathwayToWellness from "./pages/PathwayToWellness/index"; 
import Cashel from "./pages/Cashel/index";
import LarksRise from "./pages/LarksRise/index";
import NotFound from "./pages/NotFound/index";
import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/BlogJS/Posts";
import Post1 from "./components/BlogJS/Post1";


const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route exact path="/" element={<Posts />} />
          <Route path="/post1" element={<Post1 />} />
          <Route path="/PathwayToWellness" element={<PathwayToWellness />} />
          <Route path="/Cashel" element={<Cashel />} />
          <Route path="/LarksRise" element={<LarksRise />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    )
    )
    return <RouterProvider router={router} />
  }
const Root = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;
