/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext } from "react";
import { ProductRepositoryHttp } from "../api/repositories/product_repository_http";

type ProductContextType = {
    getAll: () => Promise<object | undefined>
    getById: (id: string) => Promise<object | undefined>
}

const defaultProductContext: ProductContextType = {
    getAll: async () => {
        return {};
    },
    getById: async (_id: string) => {
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

    return (
        <ProductContext.Provider value={{ getAll, getById }}>
            {children}
        </ProductContext.Provider>
    )
}