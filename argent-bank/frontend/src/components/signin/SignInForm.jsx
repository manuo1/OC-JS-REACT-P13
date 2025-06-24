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
      await dispatch(loginUser({ email: username, password })).unwrap();
      await dispatch(fetchUserProfile());
      navigate("/user");
    } catch {
      setError("Invalid credentials");
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
