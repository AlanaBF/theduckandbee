import { Link } from "react-router-dom";
import "../../App.css";
import AWOL from "../../assets/AWOL.png";
const NotFound = () => {
  return (
    <div className="AWOLpageBackground">
    <img src={AWOL} className="AWOLimage" alt="Page Not Found Image" /> 
    <div className="pageNotFound">
      <p>Oops... The page seems to have gone AWOL</p>
      <p>404</p>
      <p>Page Not Found</p>
      <div className="AWOLlink">
        <Link to="/">Go To Home Page</Link>
      </div>
    </div>
  </div>
  
  );
};

export default NotFound;
