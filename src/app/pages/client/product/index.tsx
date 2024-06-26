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
            // console.log(res.products[1].categoriesImages[0])
            setProducts(res.products)
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
                        <div className="max-md:flex max-md:flex-col max-md:items-center">
                            <CardProduct key={product.id} image={product.categoriesImages !== null ? product.categoriesImages[0] : product.modelsImages !== null ? product.modelsImages[0] : "https://via.placeholder.com/500x500"} name={product.name} id={product.id} />

                        </div>
                    )
                })
                }
            </div>

            <section className="w-full mt-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.418004768813!2d-46.60970718789276!3d-23.6967623786182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce446410aff7f9%3A0x3b653ae235cc43c5!2sR.%20Marte%2C%2081%20-%20Serraria%2C%20Diadema%20-%20SP%2C%2009981-540!5e0!3m2!1spt-BR!2sbr!4v1713319162086!5m2!1spt-BR!2sbr" 
                    height="400"
                    loading="lazy"
                    className='p-4 w-full'
                ></iframe>
            </section>
        </main>
        <Footer />
        </>
    )
}