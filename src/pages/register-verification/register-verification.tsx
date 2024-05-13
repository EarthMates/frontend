import VerificationForm from "../../components/verification/verification-form";
import classNames from "classnames";
import styles from "./register-verification.module.scss";
import { Header } from "../../components/header/header";

//page registerVerification

function RegisterVerification() {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      {/*made this but don't understand what should be the route*/}
      <VerificationForm route="/api/user/register/" />
    </div>
  );
}

export default RegisterVerification;
