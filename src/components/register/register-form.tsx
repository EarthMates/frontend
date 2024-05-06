import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./register-form.modules.scss";

interface RegisterFormProps {
  className?: string;
  route: string;
  method: string;
}

function RegisterForm({ className, route, method }: RegisterFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  //FRONTEND:

  /*
   i'm probably going to eventually move 
   all to file called frontend-something.tsx,
    but for now we laying the bricks
  */

  //component for sigup with google/linkedin

  const GoogleLinkedinLogin = () => {
    return (
      <div className="google-linkedin-container">
        {/*<div className="google-button">
          <button className="google-button-text">Login with Google</button>
        </div>

        <div className="linkedin-button">
          <button className="linkedin-button-text">Login with Linkedin</button>
    </div>*/}
      </div>
    );
  };

  //component for forgot password/create new account section
  const ForgotPassword_CreateNew = () => {
    return (
      <div className="Forgot-create_Container">
        <div className="forgot-pass">
          <h2>Forgot password?</h2>
        </div>
        <div className="create-acc">
          <h2>Don't have an account?</h2>
          <h3>Create a new one</h3>
        </div>
      </div>
    );
  };

  //component for "or line"

  const OrLine = () => {
    return (
      <div className="or-line-container">
        <div className="br-line" />
        <h3>Or</h3>
        <div className="br-line" />
      </div>
    );
  };

  //Component for login form
  //If in login page return in order:
  //returns a <br>
  //returns the google/linkedin login button container
  //returns the forgot password/create new account section
  interface LoginFormBottomProps {
    hide: boolean;
  }
  var hidden = false;
  var buttonwriting = "";

  const LoginFormBottom = ({ hide }: LoginFormBottomProps) => {
    if (!hide) {
      return (
        <div className="bottom-container">
          <OrLine />
          <GoogleLinkedinLogin />
          <ForgotPassword_CreateNew />
        </div>
      );
    } else {
      return <div hidden></div>;
    }
  };

  //creates the login form title
  //and manages what happens according to the method of the form
  const titleMaker = (name: string): string => {
    if (name === "Login") {
      buttonwriting = "Sign in";
      return "Login to Earthmates";
    } else {
      //hides the bottom part for now
      hidden = true;
      return name;
    }
  };

  /*//component for loading indicator
  const LoadingIndicator = () => {

  };*/

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{titleMaker(name)}</h1>
      <input
        id="username"
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder=" "
      />
      <label for="username" className="form-label">
        Username
      </label>
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder=" "
      />
      <label for="username" className="form-label">
        Password
      </label>

      {/* {loading && <LoadingIndicator />} */}
      <button className="form-button" type="submit">
        {buttonwriting}
      </button>

      <LoginFormBottom hide={hidden} />
    </form>
  );
}

export default RegisterForm;
