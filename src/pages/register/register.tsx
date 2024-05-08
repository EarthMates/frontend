import RegisterForm from "../../components/register/register-form";
import classNames from "classnames";
import styles from "./register.module.scss";
import { Header } from "../../components/header/header";

function Register() {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      <RegisterForm route="/api/user/register/" />
    </div>
  );
}

export default Register;
