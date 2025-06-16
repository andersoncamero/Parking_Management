import { type AuthServiceInterface } from "../../app/services/AuthService";
import type { Employee } from "../entities/Employee";

export const Authenticated = async (
  query: Employee,
  authService: AuthServiceInterface
): Promise<string> => {
    if (!query) throw new Error("Email and password are required");
    return await authService.handleLogin(query.email, query.password)
};
