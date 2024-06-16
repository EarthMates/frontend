import { useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN, EMAIL } from "../../../constants";
import { extractUsername } from "../../../utils/utils";
import { FaHeadset } from "react-icons/fa";
import "./login-form.modules.scss";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
//this is for the loading indicator
import CircularProgress from "@mui/material/CircularProgress";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "../../../assets/google-color.svg";
import LinkedInIcon from "../../../assets/linkedin-color.svg";

interface LoginFormProps {
  className?: string;
  route: string;
}

function LoginForm({ className, route }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const username = extractUsername(email);
      console.log({ username, password });
      const res = await api.post(route, { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      localStorage.setItem(EMAIL, email)
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:jacopo@earthmates.de";
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const GoogleLinkedinLogin = () => {
    return (
      <Grid
        container
        spacing={2}
        className="google-linkedin-container"
        direction="column"
      >
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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

  const ForgotPassword_CreateNew = () => {
    return (
      <>
        {/*used to be at the bottom, used to contain:
          forgot-pass // creat-acc divs
        */}
      </>
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
        {/*<ForgotPassword_CreateNew /> */}
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="title-container">
          <h1>Login to EarthMates</h1>
          <div className="create-acc">
            <h2>Don't have an account?</h2>
            <a href="/register" style={{ cursor: "pointer" }}>
              <h3>&nbsp;Sign up</h3>
            </a>
          </div>
        </div>

        <Grid container spacing={2} direction="column">
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
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="Forgot-create_Container">
              <div className="forgot-pass">
              <a onClick={handleContactClick} className="contact">
        Contact help center
      </a>
              </div>
            </div>
          </Grid>
          <Grid item>
            <button className="form-button" type="submit">
              Next
            </button>
          </Grid>
        </Grid>
        {loading && (
          <div className="loading">
            <CircularProgress sx={{ color: "#ff8516" }} />
          </div>
        )}
        {/*<LoginFormBottom />*/}
      </form>
    </div>
  );
}

export default LoginForm;
