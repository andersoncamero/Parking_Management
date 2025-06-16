import React, { useContext } from "react";
import { useAuth,type AuthInterface } from "../app/hooks/useAuth";

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthInterface | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const authHook = useAuth()

    return (
        <AuthContext.Provider value={authHook}>
            {children}
        </AuthContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthInterface => {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error("useAuthContext must be used within an AuthProvider");
    return context
}