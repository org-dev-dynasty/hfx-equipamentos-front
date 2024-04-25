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

    async deleteModelOrCategory(productId: string, type: string, id: string) {
        try {
            if(type === 'Model'){
                const response = await http.put(`/delete-model-of-product`, {
                    "productId": productId,
                    "modelId": id
                });
                return response.data;
            }
        } catch (error: any){
            console.log("Error: "+error);
        }
    }

    async uploadImage(product: any, images: any) {
        if(images.length > 0){
            const formData = new FormData();
            Array.from(images).map((image: any) => {
                if (product.models !== null && product.models !== undefined && product.models.length > 0) {
                    product.models.map((model: any) => {
                        console.log("Appending to model:", model.split()[0]);
                        formData.append(`${model.split()[0]}`, image);
                    });
                } else if (product.categories !== null && product.categories !== undefined && product.categories.length > 0) {
                    product.categories.map((category: any) => {
                        console.log("Appending to category:", category.split()[0]);
                        formData.append(`${category.split()[0]}`, image);
                    });
                } else {
                    throw new Error("Error: No models or categories found");
                }
            });
            formData.append("productId", product.id);
            console.log(formData);
            const responseImage = await http.post("/upload-product-images", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(responseImage.data);
        }
    }
}