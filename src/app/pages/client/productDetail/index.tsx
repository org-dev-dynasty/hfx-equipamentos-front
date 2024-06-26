/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Bulldozer, HardHat, Hammer } from "@phosphor-icons/react";

import EngateRapido from "../../../assets/Engate.png";
import TesouraHidraulica from "../../../assets/Tesoura.png";
import Compactadores from "../../../assets/Compactador.png";
import Rompedores from "../../../assets/Rompedor.png";

import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/product_context";

export function ProductDetail() {
    const [product, setProduct] = useState<object>({})
    const [models, setModels] = useState([])
    const [category, setCategory] = useState([])
    const [attributes, setAttributes] = useState([])
    const [littleDescription, setLittleDescription] = useState([])
    const [image, setImage] = useState("")

    const { getById } = useContext(ProductContext)
    // const id = localStorage.getItem("product")

    const id = window.location.pathname.split("/")[2]

    const handleProduct = (event: any) => {
        setAttributes((product as { attributes: any }).attributes[event.target.value]);
    };

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        if (id) {
            getById(id).then((res: any) => {
                setProduct(res);
                setModels(res.models);
                setCategory(res.categories);
                setLittleDescription(res.littleDescription);
                if(res.categoriesImages !== null && res.categoriesImages.length > 0){
                    setImage(res.categoriesImages[0]);
                } else if (res.modelsImages !== null && res.modelsImages.length > 0){
                    setImage(res.modelsImages[0]);
                } else {
                    setImage("https://via.placeholder.com/300");
                }
            }).catch(err => {
                console.error("Failed to fetch product details:", err);
            });
        }

        console.log(attributes)
    }, [])
    return (
        <>
            <Navbar page="ProductDetail" />
            <main className="p-8 flex flex-col items-center bg-gray-100 font-main">
                <h1 className="text-xlarge font-bold text-center">{(product as { name: string }).name}</h1>
                <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">{(product as { description: string }).description}</p>

                <section className="flex items-start justify-evenly w-full gap-8 max-md:flex-col">
                    {littleDescription.map((description: string, index: number) => (
                        <div className="w-1/5 max-md:w-full flex flex-col items-center" key={index}>
                            {index == 0 ? <Bulldozer color="#0063AE" size={32} /> : index == 1 ? <HardHat color="#0063AE" size={32} /> : <Hammer color="#0063AE" size={32} />}
                            <div className="w-[80%] h-[1px] bg-primary" />
                            <div className="text-center mt-2">
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="w-full mt-16">
                    <div className="bg-white flex max-md:items-center shadow-2xl max-md:flex-col">
                        <img className="w-64 object-contain" src={(product as { name: string }).name == "Engate Rápido" ? EngateRapido : (product as { name: string }).name == "Tesoura Hidráulica" ? TesouraHidraulica : (product as { name: string }).name == "Compactadores" ? Compactadores : (product as { name: string }).name == "Rompedores" ? Rompedores : image} alt="Imagem" />
                        <div className="w-1/3 flex flex-col justify-between p-2 max-md:w-full max-md:gap-4">
                            <select onChange={handleProduct} className="w-full p-2 rounded-lg shadow-xl border-2">
                                <option selected value={[]}>Selecione o modelo</option>
                                {models != undefined && models.map((model: string, index: number) => {
                                    return <option value={index}>{model.split("#")[0]}</option>
                                })}
                                {category != undefined && category.map((category: string, index: number) => {
                                    return <option value={index}>{category.split("#")[0]}</option>
                                })}
                            </select>
                            <a
                                href="https://api.whatsapp.com/send?phone=551140722525&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20nosso%20servi%C3%A7o!"
                                className="bg-primary p-3 text-center text-white font-bold rounded-xl text-small duration-150 hover:bg-blue-500">
                                Faça orçamento
                            </a>
                        </div>

                        <div className="w-full p-4">
                            <h3 className="font-bold text-medium text-center">Especificações</h3>
                            <div className="gap-4 mt-2 grid grid-cols-2 max-lg:grid-cols-1">
                                {attributes != undefined && Object.keys(attributes).map((key: any) => (
                                    key !== 'modelId' && key !== 'categoria' ?
                                        <div className="flex gap-2 max-sm:flex-col max-sm:items-center" key={key}>
                                            <label className="font-bold">{capitalizeFirstLetter(key.split(/(?=[A-Z])/).join(' '))}:</label>
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