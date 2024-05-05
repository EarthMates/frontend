import RegisterForm from "../components/register-user-form/register-form";

function Register() {
  return <RegisterForm route="/api/user/register/" method="register" />;
}

export default Register;
