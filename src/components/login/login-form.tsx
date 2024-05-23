import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./login-form.modules.scss";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
      console.log({ email, password });
      const res = await api.post(route, { email, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate(-1);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
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

  const ForgotPassword_CreateNew = () => {
    return (
      <div className="Forgot-create_Container">
        <div className="forgot-pass">
          <h3>Forgot password?</h3>
        </div>
        <div className="create-acc">
          <h2>Don't have an account?</h2>
          <a href="/register" style={{ cursor: "pointer" }}>
            <h3>&nbsp;Create one</h3>
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
        <ForgotPassword_CreateNew />
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Login to EarthMates</h1>
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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

export default LoginForm;
