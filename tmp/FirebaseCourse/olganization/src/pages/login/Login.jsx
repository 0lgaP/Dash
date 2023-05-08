import { useState, useRef } from "react";
// hooks
import { useLogin } from "../../hooks/useLogin";

// components
import Input from "../../components/input/Input";
import PasswordInput from "../../components/input/PasswordInput";
import FormCard from "../../components/Cards/FormCard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isPending } = useLogin();
  const passRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <FormCard
      onSubmit={handleSubmit}
      title="Login"
      buttonLabel={isPending ? "Loading" : "Login"}
      error={error}
      isPending={isPending}
    >
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        inputLabel="Email"
      />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        password={password}
        ref={passRef}
      />

      {error && <div className="error">{error}</div>}
    </FormCard>
  );
};

export default Login;


