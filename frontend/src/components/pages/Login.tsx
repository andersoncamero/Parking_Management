import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useAuthContext } from "../../context/AuthConstext";

export const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useAuthContext();

  return (
    <div className="login-div-primary">
      <div className="login-div-secondary">
        <h1 className="h1-primary"> Iniciar Sesion</h1>
        <Input
          label="Correo electronico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="mt-4 w-full"
          onClick={() => handleLogin(email, password)}
          type="button"
        >
          Login
        </Button>
      </div>
    </div>
  );
};
