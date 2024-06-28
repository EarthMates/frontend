import LoginForm from "../../components/registration/login/login-form";
import classNames from "classnames";
import styles from "./login.module.scss";
import { Header } from "../../components/registration/header/header-registration";

function Login() {
  return (
    <div className={classNames(styles.root)}>
      <LoginForm route="/users/token/" />
    </div>
  );
}

export default Login;
