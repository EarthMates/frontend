import LoginForm from "../../components/login/login-form";
import classNames from "classnames";
import styles from "./login.module.scss";
import { Header } from "../../components/header/header";

function Login() {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      <LoginForm route="/api/token/" />
    </div>
  );
}

export default Login;
