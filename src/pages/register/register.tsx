import RegisterForm from "../../components/registration/register/register-form";
import classNames from "classnames";
import styles from "./register.module.scss";
import { Header } from "../../components/registration/header/header-registration";

function Register() {
  return (
    <div className={classNames(styles.root)}>
      <RegisterForm route="/users/register/" />
    </div>
  );
}

export default Register;
