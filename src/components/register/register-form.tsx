import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./register-form.modules.scss";

interface RegisterFormProps {
  className?: string;
  route: string;
}

function RegisterForm({ className, route }: RegisterFormProps) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { email, fullname, password });
      navigate("/login");
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
  const Sign_in_container = () => {
    return (
      <div className="signin-container">
        <div className="signin-internal">
          <h2>Already have an account?</h2>
          <a href="/login" style={{ cursor: "pointer" }}>
            <h3>Sign in</h3>
          </a>
        </div>
        <h2 className="terms">
          By signing up "Continue", you are accepting our <a>Terms of use</a>{" "}
          and our <a>Privacy policy</a>.
        </h2>
      </div>
    );
  };

  //component for "or line"

  const OrLine = () => {
    return (
      <div className="or-line-container">
        <div className="br-line left-line" />
        <h3>Or</h3>
        <div className="br-line right-line" />
      </div>
    );
  };

  const LoginFormBottom = () => {
    return (
      <div className="bottom-container">
        <OrLine />
        <GoogleLinkedinLogin />
        <Sign_in_container />
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Welcome to Earthmates</h1>
        <input
          id="fullname"
          className="form-input"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="                          "
        />
        <label htmlFor="fullname" className="form-label">
          Full name
        </label>
        <input
          id="emailaddress"
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="                          "
        />
        <label htmlFor="emailaddress" className="form-label">
          Email address
        </label>
        <input
          id="password"
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="                          "
        />
        <label htmlFor="password" className="form-label">
          Password
        </label>

        {/* {loading && <LoadingIndicator />} */}
        <button className="form-button" type="submit">
          Next
        </button>

        <LoginFormBottom />
      </form>
    </div>
  );
}

export default RegisterForm;
