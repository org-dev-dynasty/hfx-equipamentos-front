/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ImageSlider } from "../../../components/ImageSlider";
import { Navbar } from "../../../components/Navbar";
import PhotoCard from "../../../assets/imagemCardHome.png"

import { useLayoutEffect } from "react";

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Crane, Gear, HardHat, Invoice, Lightbulb, PencilRuler, Timer } from "@phosphor-icons/react";

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

    const mq = gsap.matchMedia();

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".firstTitle", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".title",
                // markers: true,
                start: "top 600px",
                end: "bottom 300px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".firstTitle")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".firstTitle", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".title",
                // markers: true,
                start: "top 600px",
                end: "bottom 300px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".firstTitle")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 250px",
                end: "bottom 2500px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardOne")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardTwo", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 1500px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardTwo")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardThree", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 700px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardThree")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardFour", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 200px",
                end: "bottom 500px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardFour")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".titleOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".products",
                // markers: true,
                start: "top 350px",
                end: "bottom 1800px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".titleOne")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".productCard", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".products",
                // markers: true,
                start: "top 200px",
                end: "bottom 3000px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".productCard")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".imageData", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".datas",
                // markers: true,
                start: "top 500px",
                end: "bottom 400px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".imageData")
        }
    })

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".dataImage", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".imageDatas",
                // markers: true,
                start: "top 600px",
                end: "bottom 400px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".dataImage")
        }
    })

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".productCard", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".products",
                // markers: true,
                start: "top 400px",
                end: "bottom 800px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".productCard")
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
                start: "top 400px",
                end: "bottom 300px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".firstTitle")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 350px",
                end: "bottom 1000px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardOne")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardTwo", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 350px",
                end: "bottom 1000px ",
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
                start: "top 250px",
                end: "bottom 900px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardThree")
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
                start: "top 250px",
                end: "bottom 900px ",
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
                start: "top 400px",
                end: "bottom 1000px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".titleOne")
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
                start: "top 350px",
                end: "bottom 800px ",
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
                start: "top 500px",
                end: "bottom 600px ",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".imageData")
        }
    }, [])

    return (
        <>
            <Navbar page="Home" />
            <main className="bg-l-gray font-main max-w-screen overflow-x-hidden">
                {/* <ImageSlider /> */}

                <video src={'https://hfx-equipamentos-images.s3.sa-east-1.amazonaws.com/homeVideo.mp4'} autoPlay loop muted className="w-full md:h-[70vh] object-cover" />

                <section className="products mt-10 flex justify-center flex-col">
                    <div className="titleOne opacity-0 text-center">
                        <h1 className="text-xlarge text-main font-bold max-md:text-large max-sm:text-medium ">Mais vendidos</h1>
                        <p className="text-large max-md:text-medium max-sm:text-small ">Abaixo encontram-se os produtos em destaque da HXF.</p>
                    </div>
                    <hr className="mt-3 mx-2 " />

                    <div className="productCard opacity-0 -translate-x-[70rem]  flex items-center justify-center">
                        <div className="flex max-md:flex-col items-center">
                            {products.map((product: any) => {
                                return (
                                    <CardProduct key={product.id} image={product.image} name={product.name} id={product.id} />
                                )
                            })
                            }
                        </div>
                    </div>
                </section>

                <section className="title">
                    <h1 className="firstTitle opacity-0 translate-y-[90rem] font-bold my-10 text-xlarge text-center max-md:text-large max-sm:text-medium ">Alguns de nossos valores</h1>
                </section>

                <section className="cards bg-primary p-5  lg:grid-cols-2 max-lg:grid-cols-2 sm:grid grid-cols-1 max-md:grid-cols-2 gap-5 ">

                    <div className="cardOne opacity-0  flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%] max-sm:h-[60%] max-sm:w-full mb-10">
                        <div className="h-0">
                            <Invoice size={24} className="text-secondary ml-2" />
                        </div>
                        <div>
                            <h1 className=" text-large max-md:text-medium">Experiência de Mercado</h1>
                            <p className="mt-8 w-[100%] text-medium h-[100%] max-md:text-small">Possuímos uma experiência na indústria da construção civil, com reputação confiável, transmitindo segurança aos nossos clientes ao escolherem os produtos e serviços da HXF.</p>
                        </div>
                    </div>

                    <div className="cardTwo opacity-0  flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%] max-sm:h-[50%] max-sm:w-full mb-10">
                        <div className="">
                            <Timer size={24} className="text-secondary ml-2" />
                        </div>
                        <div className="">
                            <h1 className=" text-large max-md:text-medium">Eficiência Garantida</h1>
                            <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small max-sm:h-[50%]">Fornecemos soluções eficientes e de alta qualidade para demolição, compactação de solos e mineração, garantindo que nossos clientes possam confiar na HXF para atender às suas necessidades. Nosso suporte especializado garante que você não perca dias de trabalho, devido ao auxílio técnico que irá te auxiliar para minimizar os impactos</p>
                        </div>
                    </div>

                    <div className="cardThree  opacity-0 flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto mb-0 max-md:h-[100%] max-sm:h-[50%] max-sm:w-full max-sm:mb-10 ">
                        <div className="h-0">
                            <Gear size={24} className="text-secondary ml-2" />
                        </div>
                        <div>
                            <h1 className=" text-large max-md:text-medium">Soluções Personalizadas</h1>
                            <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small max-sm:h-[50%]">Oferecemos soluções personalizadas que atendam às necessidades específicas de cada cliente, demonstrando flexibilidade e adaptabilidade para satisfazer os requisitos individuais de cada projeto.</p>
                        </div>
                    </div>

                    <div className="cardFour opacity-0 flex gap-5 bg-blue-800 w-[90%] rounded-xl text-white p-5 mx-auto max-md:h-[100%] max-sm:w-full">
                        <div className="h-0">
                            <Lightbulb size={24} className="text-secondary ml-2" />
                        </div>
                        <div>
                            <h1 className=" text-large max-md:text-medium">Inovação Continua</h1>
                            <p className="mt-5 w-[100%] text-medium h-[100%] max-md:text-small">Possuímos compromisso com a inovação, destacando o desenvolvimento de soluções de última geração que não apenas melhoram a eficiência operacional, mas também minimizam o impacto ambiental.</p>
                        </div>
                    </div>

                </section>

                <section className="datas m-12 relative">
                    <div className="imageData opacity-0 -translate-x-[80rem]">
                        <img src={PhotoCard} alt="" className="w-full h-[650px] max-md:h-[450px] max-sm:h-[250px] object-cover rounded-xl brightness-50" />
                        <p className="absolute bottom-0 p-4 text-white text-2xlarge max-md:text-xlarge max-sm:text-small">
                            Consultoria, Performance, Liderança
                        </p>
                    </div>
                </section>

                <section className="imageDatas h-[100%] grid grid-cols-3 mx-auto w-4/6 gap-5 max-sm:grid-cols-1">
                    <div className="dataImage opacity-0 translate-x-[80rem] bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <Crane size={32} className="mx-auto mb-3" />
                        <p className="text-center lg:text-large md:text-medium sm:text-small">Somos referência nacional em compactação de valas para saneamento básico.</p>
                    </div>
                    <div className="dataImage translate-x-[70rem] bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <HardHat size={32} className="mx-auto mb-3"/>
                        <p className="text-center lg:text-large md:text-medium sm:text-small">Equipamentos de alta performance aliados ao custo benefício.</p>
                    </div>
                    <div className="dataImage translate-x-[60rem] bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <PencilRuler size={32} className="mx-auto mb-3" />
                        <p className="text-center lg:text-large md:text-medium sm:text-small">Consultoria na aplicação de cada produto</p>
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
                        className='p-4 w-full mt-10'
                    ></iframe>
                </section>
            </main>
            <Footer />
        </>
    )
}