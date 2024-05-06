import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./register-form.css";

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

  //creates the login form title
  const titleMaker = (name: string): string => {
    if (name === "Login") {
      return "Login to Earthmates";
    } else {
      return name;
    }
  };

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
        <div className="Forgot-create-title">
          <h2>Forgot your password?</h2>
        </div>
        <div className="Forgot-create-subtitle">
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
        <h3>or</h3>
        <br className="br-line" />
      </div>
    );
  };

  //Component for login form
  //If in login page return in order:
  //returns a <br>
  //returns the google/linkedin login button container
  //returns the forgot password/create new account section

  const LoginFormBottom = () => {
    return (
      <div className="bottom-container">
        <OrLine />

        <GoogleLinkedinLogin />

        <ForgotPassword_CreateNew />
      </div>
    );
  };

  /*//component for loading indicator
  const LoadingIndicator = () => {

  };*/

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{titleMaker(name)}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* {loading && <LoadingIndicator />} */}
      <button className="form-button" type="submit">
        {name}
      </button>

      <LoginFormBottom />
    </form>
  );
}

export default RegisterForm;
