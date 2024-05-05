import RegisterForm from "../../components/register/register-form";

function Login() {
  return <RegisterForm route="/api/token/" method="login" />;
}

export default Login;
