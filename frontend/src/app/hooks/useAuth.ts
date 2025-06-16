import { useState } from "react";
import { AuthService } from "../services/AuthService";

export interface AuthInterface {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  handleLogin: (email: string, password: string) => void;
}

export const useAuth = (): AuthInterface => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const authService = new AuthService();

  const handleLogin = async () => {
    if (!email || !password) throw new Error("Email and password are required");
    try {
      const token = await authService.handleLogin(email, password);
      console.log(token);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    isAuthenticated,
    setIsAuthenticated,
    handleLogin,
  };
};
