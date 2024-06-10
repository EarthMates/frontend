import { useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../constants";
import "./verification-form.modules.scss";
import CircularProgress from "@mui/material/CircularProgress";

interface VerificationFormProps {
  className?: string;
  route: string;
}

function VerificationForm({ className, route }: VerificationFormProps) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [verifyCode, setVerifyCode] = useState<string[]>(Array(6).fill(""));

  const handleInputChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVerifyCode = [...verifyCode];
      newVerifyCode[index] = e.target.value;
      setVerifyCode(newVerifyCode);
    };

  const handleSubmit = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(true);

    if (
      !Array.isArray(verifyCode) ||
      verifyCode.length !== 6 ||
      verifyCode.some((code) => typeof code !== "string")
    ) {
      alert("Verification code must be an array of 6 strings.");
      setLoading(false);
      return;
    }

    try {
      const res = await api.post(route, {
        // Whatever data you need to send in the request
      });
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const Receive_resend = () => {
    return (
      <div className="receive-resend-container">
        <div className="receive-resend">
          <h2>
            Didn't receive an email? <div className="orangeLink">Resend</div>
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="full-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Verify your email</h1>
        <h2>
          We’ve sent you a verification code at{" "}
          <div className="bold">{`\${sample_email}`}</div> to verify your
          account
        </h2>
        <div className="verify-container">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              id={`verify${index + 1}`}
              className="form-input"
              type="text"
              value={verifyCode[index]}
              onChange={handleInputChange(index)}
              placeholder=" "
              pattern="[0-9]"
              title="Please enter a single number (0-9)"
              maxLength={1}
              required
            />
          ))}
        </div>

        {loading && (
          <div className="loading">
            <CircularProgress sx={{ color: "#ff8516" }} />
          </div>
        )}
        <button className="form-button" type="submit">
          Next
        </button>

        <Receive_resend />
      </form>
    </div>
  );
}

export default VerificationForm;
