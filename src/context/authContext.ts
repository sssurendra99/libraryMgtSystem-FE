import { createContext, useContext } from "react";

export interface AuthUser {
    username: string | undefined,
    role: unknown,
};

export const AuthContext = createContext<AuthUser | undefined>(undefined);

export function useAuthContext() {

    const authUser = useContext(AuthContext);

    if (authUser === undefined){
        throw new Error("Data does not exist in the authContext!")
    } 

    return authUser;

}