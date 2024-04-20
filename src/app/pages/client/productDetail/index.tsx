/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Bulldozer, HardHat, Pipe } from "@phosphor-icons/react";

import Tool from "../../../assets/Rompedor.png";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/product_context";

export function ProductDetail() {
    const [product, setProduct] = useState<object>({})
    const [models, setModels] = useState([])
    const [category, setCategory] = useState([])
    const [attributes, setAttributes] = useState([])

    const { getById } = useContext(ProductContext)
    const id = localStorage.getItem("product")

    const handleProduct = (event:any) => {
        setAttributes((product as { attributes: any }).attributes[event.target.value]);
    };

    useEffect(() => {
        if (id) {
            getById(id).then((res : any) => {
                setProduct(res);
                setModels(res.models);
                setCategory(res.categories);
                console.log(res);
            }).catch(err => {
                console.error("Failed to fetch product details:", err);
            });
        }
    }, [])
    return (
        <>
        <Navbar page="ProductDetail"/>
        <main className="p-8 flex flex-col items-center bg-gray-100 font-main">
            <h1 className="text-xlarge font-bold text-center">{(product as { name: string }).name}</h1>
            <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">{(product as { description: string }).description}</p>
            
            <section className="flex items-start justify-evenly w-full gap-8 max-md:flex-col">
                <div className="w-1/5 max-md:w-full flex flex-col items-center">
                    <Bulldozer color="#0063AE" size={32}/>
                    <div className="w-[80%] h-[1px] bg-primary"/>
                    <div className="text-center mt-2">
                        <p>Abertura de valas.</p>
                        <p>Demolição em geral.</p>
                    </div>
                </div>
                <div className="w-1/5 max-md:w-full flex flex-col items-center">
                    <HardHat color="#0063AE" size={32}/>
                    <div className="w-[80%] h-[1px] bg-primary"/>
                    <div className="text-center mt-2">
                        <p>Quebra de matacos em pedreiras</p>
                        <p>Desmonte de rocha</p>
                    </div>
                </div>
                <div className="w-1/5 max-md:w-full flex flex-col items-center">
                    <Pipe color="#0063AE" size={32}/>
                    <div className="w-[80%] h-[1px] bg-primary"/>
                    <div className="text-center mt-2">
                        <p>Obras de saneamento básico</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-16">
                <div className="bg-white flex max-md:items-center shadow-2xl max-md:flex-col">
                    <img className="w-64 object-contain" src={Tool} alt="Imagem do Rompedor" />
                    <div className="w-1/3 flex flex-col justify-between p-2 max-md:w-full max-md:gap-4">
                        <select onChange={handleProduct} className="w-full p-2 rounded-lg shadow-xl border-2">
                            <option selected value={[]}>Selecione o modelo</option>
                            {models != undefined && models.map((model : string, index : number) => {
                                return <option value={index}>{model.split("#")[0]}</option>
                            })}
                            {category != undefined && category.map((category : string, index : number) => {
                                return <option value={index}>{category.split("#")[0]}</option>
                            })}
                        </select>
                        <button className="bg-primary p-3 text-white font-bold rounded-xl text-small duration-150 hover:bg-blue-500">
                            Faça orçamento
                        </button>
                    </div>

                    <div className="w-full p-4">
                        <h3 className="font-bold text-medium text-center">Especificações</h3>
                        <div className="gap-4 mt-2 grid grid-cols-2 max-lg:grid-cols-1">
                            {attributes != undefined && Object.keys(attributes).map((key: any) => (
                                key !== 'modelId' && key !== 'categoria' ?
                                <div className="flex gap-2 max-sm:flex-col max-sm:items-center" key={key}>
                                    <label className="font-bold">{key}:</label>
                                    <label>{attributes[key]}</label>
                                </div>
                                : null
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}