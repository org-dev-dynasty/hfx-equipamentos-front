import { http } from "../http";

/* eslint-disable @typescript-eslint/no-explicit-any */
export class ProductRepositoryHttp {
    async getAll() {
        try {
            const response = await http.get("/get-all-products");
            return response.data;
        } catch (error: any){
            console.log("Error: "+error);
        }
    }
}