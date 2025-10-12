import type { SighInRequest } from "@/types/auth";
import type { userSession } from "@/types/userSession";
import { createContext } from "react";

interface AuthContextType{
    userSession: userSession | null;
    isAuthentication: boolean;
    isAdmin: boolean;

    login: (
        sighInRequest: SighInRequest
     ) => Promise<boolean>;
    logOut: () => void;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: React.ReactNode}) =>{
    const login = async (sighInRequest: SighInRequest): Promise<boolean> => {
    };

    const logOut = async () =>{

    }
};