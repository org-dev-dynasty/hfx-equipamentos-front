/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageSlider } from "../../../components/ImageSlider";
import { Navbar } from "../../../components/Navbar";
import PhotoCard from "../../../assets/image 11.png"

import { useLayoutEffect } from "react";

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Gear, Invoice, Lightbulb, Timer } from "@phosphor-icons/react";

import { Footer } from "../../../components/Footer";
import { ProductContext } from "../../../context/product_context";
import { useContext, useEffect, useState } from "react";
// import { FeedbackSlider } from "../../../components/FeedbackSlider";
import { CardProduct } from "../../../components/CardProduct";

export function Home() {
    const { getAll } = useContext(ProductContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const response = getAll()
        response.then((res: any) => {
            setProducts(res.products)
            console.log(res.products)
        }).catch((error) => {
            console.log("error " + error)
        })
    }, [])

    // const clients = [
    //     { nome: 'João', imagem: 'client1.jpg', comentario: 'Ótimo serviço! Recomendo muito.', estrelas: 5 },
    //     { nome: 'Maria', imagem: 'client2.jpg', comentario: 'Equipe muito profissional e eficiente.', estrelas: 4 },
    //     { nome: 'Carlos', imagem: 'client3.jpg', comentario: 'Rápidos e eficazes. Superou minhas expectativas.', estrelas: 5 },
    //     { nome: 'Ana', imagem: 'client4.jpg', comentario: 'Excelente atendimento ao cliente.', estrelas: 5 },
    //     { nome: 'Pedro', imagem: 'client5.jpg', comentario: 'Serviço de qualidade e preço justo.', estrelas: 4 },
    //     { nome: 'Pedro', imagem: 'client5.jpg', comentario: 'Serviço de qualidade e preço justo.', estrelas: 4 },
    //     { nome: 'Pedro', imagem: 'client5.jpg', comentario: 'Serviço de qualidade e preço justo.', estrelas: 4 },
    // ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 600px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardOne")
        }
    })

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardTwo", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 600px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardTwo")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardThree", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 600px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardTree")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardFour", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 600px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardFour")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".titleOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".products",
                // markers: true,
                start: "top 600px",
                end: "bottom 1100px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".titleOne")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".productCard", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".products",
                // markers: true,
                start: "top 600px",
                end: "bottom 1100px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".productCard")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".imageData", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".datas",
                // markers: true,
                start: "top 600px",
                end: "bottom 800px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".imageData")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".dataImage", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".imageDatas",
                // markers: true,
                start: "top 600px",
                end: "bottom 800px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".dataImage")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".firstTitle", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".title",
                // markers: true,
                start: "top 300px",
                end: "bottom 300px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".firstTitle")
        }
    }, [])

    return (
        <>
            <Navbar page="Home" />
            <main className="bg-l-gray font-main max-w-screen overflow-x-hidden">
                <ImageSlider />
                <section className="title">
                    <h1 className="firstTitle translate-y-[80rem] font-bold my-10 text-xlarge text-center max-md:text-large max-sm:text-medium">Alguns de nossos principios</h1>
                </section>

                <section className="cards bg-primary p-5  lg:grid-cols-2 max-lg:grid-cols-2 sm:grid grid-cols-1 max-md:grid-cols-2 gap-5 ">
                    <div className="cardOne opacity-0 -translate-x-[10rem] p-3 w-[90%] rounded-xl mx-auto mt-10 max-md:w-[60%] max-sm:w-[80%]">
                        <div className="flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%]">
                            <div className="h-0">
                                <Invoice size={24} className="text-secondary ml-2" />
                            </div>
                            <div>
                                <h1 className=" text-large max-md:text-medium">ExperIência de Mercado</h1>
                                <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small">Possuímos uma experiência na indústria da construção civil, com reputação confiável, transmitindo segurança aos nossos clientes ao escolherem os produtos e serviços da HXF.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardTwo opacity-0 translate-x-[10rem] p-3 w-[90%] rounded-xl mx-auto mt-10 max-md:w-[80%] max-sm:w-[80%]">
                        <div className="flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%]">
                            <div className="h-0">
                                <Timer size={24} className="text-secondary ml-2" />
                            </div>
                            <div>
                                <h1 className=" text-large max-md:text-medium">Eficiência Garantida</h1>
                                <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small">Fornecemos soluções eficientes e de alta qualidade para demolição, compactação de solos e mineração, garantindo que nossos clientes possam confiar na HXF para atender às suas necessidades. Nosso suporte especializado garante que você não perca dias de trabalho, devido ao auxílio técnico que irá te auxiliar para minimizar os impactos</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardThree opacity-0 -translate-x-[10rem] p-3 w-[90%] rounded-xl mx-auto mt-10 max-md:w-[80%] max-sm:w-[80%]">
                        <div className="flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%]">
                            <div className="h-0">
                                <Gear size={24} className="text-secondary ml-2" />
                            </div>
                            <div>
                                <h1 className=" text-large max-md:text-medium">Soluções Personalizadas</h1>
                                <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small">Oferecemos personalizadas que atendam às necessidades específicas de cada cliente, demonstrando flexibilidade e adaptabilidade para satisfazer os requisitos individuais de cada projeto.</p>
                            </div>
                        </div>
                    </div>


                    <div className="cardFour opacity-0 translate-x-[10rem] p-3 w-[90%] rounded-xl mx-auto mt-10 max-md:w-[80%] max-sm:w-[80%]">
                        <div className="flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%]">
                            <div className="h-0">
                                <Lightbulb size={24} className="text-secondary ml-2" />
                            </div>
                            <div>
                                <h1 className=" text-large max-md:text-medium">Inovação Continua</h1>
                                <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small">Possuímos compromisso com a inovação, destacando o desenvolvimento de soluções de última geração que não apenas melhoram a eficiência operacional, mas também minimizam o impacto ambiental.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="products mt-10">
                    <div className="titleOne opacity-0 translate-x-[60rem] text-center">
                        <h1 className="text-xlarge text-main font-bold max-md:text-large max-sm:text-medium ">Mais vendidos</h1>
                        <p className="text-large max-md:text-medium max-sm:text-small ">Abaixo encontram-se os produtos em destaque da HXF.</p>
                    </div>
                    <hr className="mt-3 mx-2 " />

                    <div className="productCard opacity-0 -translate-x-[70rem] flex justify-center">
                        <div className="gap-12 my-8 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                            {products.map((product: any) => {
                                return (
                                    <CardProduct key={product.id} image={product.image} name={product.name} id={product.id} />
                                )
                            })
                            }
                        </div>
                    </div>
                </section>

                <section className="datas flex justify-center my-10">
                    <div className="imageData -translate-x-[80rem] relative w-4/5">
                        <img src={PhotoCard} alt="Photo Card" className="object-cover  brightness-50 mx-auto" />
                        <p className="absolute bottom-0 p-10 text-white lg:w-4/5 text-2xlarge  md:w-full max-md:text-xlarge sm:w-full max-sm:text-small">
                            Nossas conquistas são melhores mostradas pelos nossos números
                        </p>
                    </div>
                </section>

                <section className="imageDatas grid grid-cols-3 mx-auto w-4/6 gap-5 max-sm:grid-cols-1">
                    <div className="dataImage translate-x-[80rem] bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <h1 className=" font-bold lg:text-2xlarge md:text-xlarge sm:text-large">+2 mil</h1>
                        <p className="lg:text-large md:text-medium sm:text-small">Serviços prestados</p>
                    </div>
                    <div className="dataImage translate-x-[70rem] bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <h1 className="lg:text-2xlarge md:text-xlarge sm:text-large">+13 mil</h1>
                        <p className="lg:text-large md:text-medium sm:text-small">Clientes satisfeitos</p>
                    </div>
                    <div className="dataImage translate-x-[60rem] bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <h1 className="lg:text-2xlarge md:text-xlarge sm:text-large">+820</h1>
                        <p className="lg:text-large md:text-medium sm:text-small">Especialistas qualificados</p>
                    </div>
                </section>

                {/* <section >
                    <FeedbackSlider clients={clients} />
                </section> */}

                <section>
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