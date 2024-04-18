/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { CardProduct } from "../../../components/CardProduct";

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/product_context";

export function Product () {
    const { getAll } = useContext(ProductContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const response = getAll()
        response.then((res : any) => {
            setProducts(res.products)
            console.log(res.products)
        }).catch((error) => {
            console.log("error "+ error)
        })
    }, [])

    return (
        <>
        <Navbar page="Product"/>
        <main className="p-8 flex flex-col items-center bg-gray-100 font-jost">
            <h1 className="text-xlarge font-bold text-center">Produtos HXF</h1>
            <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">A HXF tem como diferencial a qualidade inquestionável nos produtos e serviços ofertados, além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhorar atendermos nossos clientes e parceiros.</p>
            
            <div className="h-[1px] w-[90%] bg-primary" />

            <div className="gap-12 my-8 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                {products.map((product : any) => {
                    return (
                        <CardProduct key={product.id} image={product.image} name={product.name} id={product.id} />
                    )
                })
                }
            </div>
        </main>
        <Footer />
        </>
    )
}