import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputWrapper from "./InputWrapper.jsx";
import RememberMeCheckbox from "./RememberMeCheckbox.jsx";
import { loginUser, fetchUserProfile } from "../../features/userSlice.js";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await dispatch(
        loginUser({ email: username, password, rememberMe })
      ).unwrap();
      await dispatch(fetchUserProfile());
      navigate("/profile");
    } catch (err) {
      if (err.status === 400) {
        setError("Invalid email or password.");
      } else if (err.status === 401) {
        setError("Unauthorized. Please try again.");
      } else if (err.status === 500) {
        setError("Server error. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <InputWrapper
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <RememberMeCheckbox
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />

      {error && <p className="sign-in-error">{error}</p>}

      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
}
