import { useAuth0 } from "@auth0/auth0-react";
import logoNotext from "../assets/logo-notext.png";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <div>        
     <img src={logoNotext} alt="logo image" className="logo-login"></img>
        <div className="center-button">
           
           <button
            className="btn btn-primary loginBtn"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </div>{" "}
      </div>
    );
  }
};

export default LoginButton;
