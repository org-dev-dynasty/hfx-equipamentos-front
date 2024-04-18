/* eslint-disable @typescript-eslint/no-explicit-any */
import { http } from "../http";

export class UserRepositoryHttp {
    async login(email: string, password: string) {
        try {
            const response = await http.post("/login", {
                email,
                password
            });
            return response.data;
        } catch (error: any) {
            if(error.response.data == 'Field email is not valid'){
                return {message: 'Email inválido'};
            } else if (error.response.data == 'Password does not match'){
                return {message: 'Senha inválida'};
            } else {
                return {message: error.response.data};
            }
        }
    }
}