import RegisterForm from "../../components/registration/register/register-form";
import classNames from "classnames";
import styles from "./register.module.scss";
import { Header } from "../../components/registration/header/header-registration";
import ContractForm from "../../components/registration/contract/contract-form";

function Privacy() {
  return (
    <div className={classNames(styles.root)}>
      <ContractForm type="privacy" />
    </div>
  );
}

export default Privacy;
