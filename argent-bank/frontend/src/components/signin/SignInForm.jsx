import { useState } from "react";
import InputWrapper from "./InputWrapper.jsx";
import RememberMeCheckbox from "./RememberMeCheckbox.jsx";

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
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

      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
}
