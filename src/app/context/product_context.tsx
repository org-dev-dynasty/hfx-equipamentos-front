/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext } from "react";
import { ProductRepositoryHttp } from "../api/repositories/product_repository_http";

type ProductContextType = {
    getAll: () => Promise<object | undefined>
    getById: (id: string) => Promise<object | undefined>
    create: (product: any) => Promise<object | undefined>
    deleteProduct: (id: string) => Promise<object | undefined>
    deleteModelOrCategory: (productId: string, type: string, id: string) => Promise<object | undefined>
}

const defaultProductContext: ProductContextType = {
    getAll: async () => {
        return {};
    },
    getById: async (_id: string) => {
        return {};
    },
    create: async (_product: any) => {
        return {};
    },
    deleteProduct: async (_id: string) => {
        return {};
    },
    deleteModelOrCategory: async (_productId: string, _type: string, _id: string) => {
        return {};
    }
}

export const ProductContext = createContext<ProductContextType>(defaultProductContext);

export function ProductContextProvider({ children } : PropsWithChildren){
    const productRepositoryHttp = new ProductRepositoryHttp();

    async function getAll(){
        try {
            const response = await productRepositoryHttp.getAll();
            return response;
        } catch (error) {
            return error;
        }
    }

    async function getById(id: string){
        try {
            const response = await productRepositoryHttp.getById(id);
            return response;
        } catch (error) {
            return error;
        }
    }

    async function create(product: any){
        try {
            const response = await productRepositoryHttp.create(product);
            return response;
        } catch (error) {
            return error;
        }
    }

    async function deleteProduct(id: string){
        try {
            const response = await productRepositoryHttp.delete(id);
            console.log(response)
            return response;
        } catch (error) {
            return error;
        }
    }

    async function deleteModelOrCategory(productId: string, type: string, id: string){
        try {
            const response = await productRepositoryHttp.deleteModelOrCategory(productId, type, id);
            return response;
        } catch (error) {
            return error;
        }
    }

    return (
        <ProductContext.Provider value={{ getAll, getById, create, deleteProduct, deleteModelOrCategory }}>
            {children}
        </ProductContext.Provider>
    )
}