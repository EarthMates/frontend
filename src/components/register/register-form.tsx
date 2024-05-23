import React, { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./register-form.modules.scss";

import GoogleIcon from "../../assets/google-color.svg";
import LinkedInIcon from "../../assets/linkedin-color.svg";

interface RegisterFormProps {
  className?: string;
  route: string;
}

function RegisterForm({ className, route }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
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
        username: name,
        first_name: name,
        last_name: lastName,
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const GoogleLinkedinLogin = () => {
    return (
      <Grid container spacing={2} className="google-linkedin-container">
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            color="inherit"
            className="google-button"
            fullWidth
          >
            <img src={GoogleIcon} alt="Google" className="icon" />
            Login with Google
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            color="inherit"
            className="linkedin-button"
            fullWidth
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
            Login with LinkedIn
          </Button>
        </Grid>
      </Grid>
    );
  };

  const SignInContainer = () => {
    return (
      <div className="signin-container">
        <div className="signin-internal">
          <h2>Already have an account?</h2>
          <a href="/login" style={{ cursor: "pointer" }}>
            <h3>Sign in</h3>
          </a>
        </div>
      </div>
    );
  };

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
        <SignInContainer />
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Welcome to EarthMates</h1>
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
                  onChange={(e) => setLastName(e.target.value)}
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
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              inputProps={{
                pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,16}$",
                title:
                  "Password should be 8-16 characters long, at least one lowercase/uppercase letter and a number",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="confirmpassword"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Checkbox
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              name="acceptTerms"
              color="primary"
              sx={{ transform: "scale(0.8)" }}
            />
            <span className="terms">
              By signing up you are accepting our <a>Terms of use</a> and our{" "}
              <a>Privacy policy</a>.
            </span>
          </Grid>
          <Grid item>
            <button
              className="form-button"
              type="submit"
              disabled={!acceptTerms}
            >
              Next
            </button>
          </Grid>
        </Grid>

        {loading && <p>Loading...</p>}

        <LoginFormBottom />
      </form>
    </div>
  );
}

export default RegisterForm;
