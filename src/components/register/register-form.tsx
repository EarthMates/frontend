import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import "./register-form.modules.scss";

interface RegisterFormProps {
  className?: string;
  route: string;
}

function RegisterForm({ className, route }: RegisterFormProps) {
  //first name
  const [name, setName] = useState("");
  //last name
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  //first password
  const [password, setPassword] = useState("");
  //second password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    setLoading(true);
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await api.post(route, {
        username: name, // Assuming 'name' corresponds to 'username' in your Django model
        first_name: name, // Assuming 'name' corresponds to 'first_name' in your Django model
        last_name: lastName, // Assuming 'lastName' corresponds to 'last_name' in your Django model
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  //FRONTEND:

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
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              id="emailaddress"
              label="Email Address"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              inputProps={{
                pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,16}$",
                title:
                  "Password should be 8-16 characters long, at least one lowercase/uppercase letter and a number",
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="confirmpassword"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item>
            <button className="form-button" type="submit">
              Next
            </button>
          </Grid>
        </Grid>

        {/* {loading && <LoadingIndicator />} */}

        <LoginFormBottom />
      </form>
    </div>
  );
}

export default RegisterForm;
