/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositoryHttp } from "../api/repositories/user_repository_http";
import { PropsWithChildren, createContext } from "react";

type loginResponse = {
    message: string
    token?: string
}

type UserContextType = {
    login: (email: string, password: string) => Promise<loginResponse | undefined>
}

const defaultUserContext: UserContextType = {
    login: async (_email: string, _password: string) => {
        return {message: "", token: ""};
    }
}

export const UserContext = createContext<UserContextType>(defaultUserContext);

export function UserContextProvider({ children } : PropsWithChildren){
    const userRepositoryHttp = new UserRepositoryHttp();
    async function login(email: string, password: string){
        try {
            const response = await userRepositoryHttp.login(email, password);
            return response;
        } catch (error) {
            return error;
        }
    }

    return (
        <UserContext.Provider value={{ login }}>
            {children}
        </UserContext.Provider>
    )
}