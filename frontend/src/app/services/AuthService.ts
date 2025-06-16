export interface AuthServiceInterface {
    handleLogin: (email: string, password: string)=> Promise<string>;
}

export class AuthService implements AuthServiceInterface {
    async handleLogin(email: string, password: string): Promise<string>{
        if (!email || !password) throw new Error("Email and password are required");
        return "login successful"
    }
}