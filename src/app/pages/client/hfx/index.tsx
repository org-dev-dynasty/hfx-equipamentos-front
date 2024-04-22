import { Eye, Gear, Headset, Lightbulb, TreasureChest, ListChecks } from "@phosphor-icons/react"

import PhotoCard1 from "../../../assets/photo1.png"
import PhotoCard2 from "../../../assets/image 11.png"
import PhotoCard3 from "../../../assets/imagemCapaceteAzul.png"

import { Navbar } from "../../../components/Navbar"
import { Footer } from "../../../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from 'gsap'
import { motion } from "framer-motion";
import { AuroraBackground } from '../../../components/UI/index';
import { useLayoutEffect } from "react";

export function HFX() {

    const mq = gsap.matchMedia();

    mq.add("(max-width: 640px)", () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                markers: true,
                start: "top 200px",
                end: "bottom 6000px",
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
                    start: "top 100px",
                    end: "bottom 1200px",
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
                    start: "top 100px",
                    end: "bottom 1000px",
                    scrub: 1,
                }
            })
            return () => {
                gsap.killTweensOf(".cardThree")
            }
    })


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".cardOne", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards",
                // markers: true,
                start: "top 500px",
                end: "bottom 1000px",
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
                start: "top 200px",
                end: "bottom 800px",
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
                end: "bottom 400px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".cardThree")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".titlePolitie", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".polities",
                // markers: true,
                start: "top 600px",
                end: "bottom 600px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".titlePolitie")
        }
    }, [])



    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".politie", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".polities",
                // markers: true,
                start: "top 600px",
                end: "bottom 500px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".politie")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".politieText", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".polities",
                // markers: true,
                start: "top 600px",
                end: "bottom 400px",
                scrub: 1,
            }
        })
        return () => {
            gsap.killTweensOf(".politieText")
        }
    }, [])

    return (
        <>
            <Navbar page='HXF' />
            <main className="bg-l-gray font-main max-w-screen overflow-x-hidden overflow-y-hidden">
                <AuroraBackground className='relative h-[80vh]'>    
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-10 "
                    >
                        <div className="text-2xl md:text-7xl font-bold text-center">
                            Conheça mais sobre à HXF!
                        </div>
                        <div className="font-extralight text-base md:text-3xl py-4">
                            A HXF tem como diferencial a qualidade inquestionável dos produtos e serviços ofertados.

                            Além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhor atendermos nossos clientes e parceiros.
                        </div>
                    </motion.div>

                </AuroraBackground>

                <section className="cards flex flex-col items-center gap-8 mt-10">
                    <div className="cardOne opacity-0 w-3/4 flex justify-between bg-primary text-white rounded-2xl shadow-2xl max-md:flex-col-reverse max-sm:h-[90%]">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="flex justify-between items-center text-2xlarge gap-4">
                                <h2>Missão</h2>
                                <ListChecks color="#F2802E" size={48} />
                            </div>
                            <p className="text-medium">
                                Nossa missão é oferecer ao mercado soluções em diversas áreas industriais, fabricação, manutenção e montagem de equipamentos industriais, soluções e implementos para escavadeiras e afins, serviços de caldeiraria e usinagem.
                            </p>
                        </div>
                        <img className="w-1/4 object-cover rounded-2xl max-md:w-full" src={PhotoCard1} alt="Foto da maquina" />
                    </div>

                    <div className="cardTwo opacity-0 translate-x-[40rem] w-3/4 flex flex-row-reverse justify-between bg-primary text-white rounded-2xl shadow-2xl max-md:flex-col-reverse">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="flex justify-between items-center text-2xlarge gap-4 max-md:flex-row">
                                <Eye color="#F2802E" size={48} />
                                <h2>Visão</h2>
                            </div>
                            <p className="text-medium text-end max-md:text-start">
                                Ser referência no mercado como empresa fabricante de produtos e serviços para o segmento industrial metalmecânica e de equipamentos ou produtos destinados à construção civil, mineração e afins.
                            </p>
                        </div>
                        <img className="w-1/4 rounded-2xl max-md:w-full" src={PhotoCard2} alt="Foto da maquina" />
                    </div>
                    <div className="cardThree opacity-0 -translate-x-[40rem] w-3/4 flex justify-between bg-primary text-white rounded-2xl shadow-2xl max-md:flex-col-reverse">
                        <div className="p-8 flex flex-col gap-8 ">
                            <div className="flex justify-between items-center gap-4 text-2xlarge">
                                <h2 className="">Valores</h2>
                                <TreasureChest color="#F2802E" size={48} />
                            </div>
                            <ul className="ml-8 list-disc text-medium">
                                <li>Honestidade</li>
                                <li>Integridade</li>
                                <li>Respeito</li>
                                <li>Segurança</li>
                                <li>Inovação</li>
                                <li>Qualidade</li>
                            </ul>
                        </div>
                        <img className="w-1/4 rounded-2xl max-md:w-full" src={PhotoCard3} alt="Foto da maquina" />
                    </div>
                </section>

                <section className="polities flex flex-col p-8 mt-10">
                    <div className="titlePolitie opacity-0 translate-y-[20rem] flex flex-col text-center items-center">
                        <h2 className="text-2xlarge font-bold">Política de Qualidade</h2>
                        <p className="text-medium">A HXF compromete-se a fornecer soluções e serviços com alta qualidade sempre buscando a satisfação do cliente através de:</p>
                    </div>

                    <div className="politie opacity-0 translate-y-[30rem] flex justify-evenly mt-8 gap-4 max-md:flex-col">
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full border-2 border-primary duration-150 hover:scale-110">
                                <Headset color="#0063AE" size={48} />
                            </div>
                            <label className="text-medium w-1/2 text-center">Atender aos requisitos dos clientes</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full border-2 border-primary duration-150 hover:scale-110">
                                <Gear color="#0063AE" size={48} />
                            </div>
                            <label className="text-medium w-1/2 text-center">Seguir normas técnicas de mecânica e normas aplicáveis</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full border-2 border-primary duration-150 hover:scale-110">
                                <Lightbulb color="#0063AE" size={48} />
                            </div>
                            <label className="text-medium w-1/2 text-center">Fornecer soluções aos nossos clientes</label>
                        </div>
                    </div>

                    <p className="politieText opacity-0 translate-y-[40rem] text-center mt-12 text-large">Tudo isso aliado a melhoria continua de nossos processos e serviços.</p>
                </section>

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