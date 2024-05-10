import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import "./verification-form.modules.scss";

interface RegisterFormProps {
  className?: string;
  route: string;
  //receives an email{the inserted email in registration} as props
  email: string;
}

function RegisterForm({ className, route, email }: RegisterFormProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [verifyCode, setVerifyCode] = useState("abcdefg");
  const inserted_email = email;

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, {
        /*whatever goes here*/
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  //FRONTEND:

  /*
   i'm probably going to eventually move 
   all to file called frontend-something.tsx,
    but for now we laying the bricks
  */

  //component for forgot password/create new account section
  const Receive_resend_container = () => {
    return (
      <div className="receive-resend-container">
        <div className="receive-resend">
          <h2>Didn't receive an email?</h2>
          <h3>Resend</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Verify your email</h1>
        <h2>
          We’ve sent you a verification code at {`${inserted_email}`} to verify
          your account
        </h2>
        <input
          id="verify1"
          className="form-input"
          type="text"
          value={}
          onChange={(e) => setVerifyCode(e.target.value)}
          placeholder=" "
        />
        <input
          id="verify2"
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
        />
        <input
          id="verify3"
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
        />
        <input
          id="verify4"
          className="form-input"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder=" "
        />
        <input
          id="verify5"
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" "
        />
        <input
          id="verify6"
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
        />

        {/* {loading && <LoadingIndicator />} */}
        <button className="form-button" type="submit">
          Next
        </button>

        <LoginFormBottom />
      </form>
    </div>
  );
}

export default RegisterForm;
