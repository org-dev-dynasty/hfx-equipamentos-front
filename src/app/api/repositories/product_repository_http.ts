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

    async getById(id: string) {
        try {
            const response = await http.get(`/get-product-by-id?id=${id}`);
            return response.data;
        } catch (error: any){
            console.log("Error: "+error);
        }
    }

    async create(product: any) {
        try {
            const response = await http.post("/create-product", product);
            return response.data;
        } catch (error: any){
            console.log("Error: "+error);
        }
    }

    async delete(id: string) {
        try {
            const response = await http.delete(`/delete-product?id=${id}`);
            return response.data;
        } catch (error: any){
            console.log("Error: "+error);
        }
    }
}