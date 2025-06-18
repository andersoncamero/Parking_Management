import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useAuthContext } from "../../context/AuthConstext";
import { User } from "lucide-react";
import Parking from "../../assets/tres.png"

export const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin } =
    useAuthContext();

  return (
    <>
      <div className="login-div-primary">
        <div className="login-div-secondary">
          <h1 className="h1-primary"> Iniciar Sesion</h1>
          <div className="login-icon">
            <User size={36} strokeWidth={1} />
          </div>
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
        <div className="image-containt"> <img className="image-parking" src={Parking} alt="parqueadero" /></div>
      </div>
    </>
  );
};
