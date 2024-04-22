/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Navbar } from "../../../components/Navbar";
import { Envelope, MapPinSimpleArea, PencilSimple, Phone, User, WhatsappLogo } from "@phosphor-icons/react";
import { Footer } from '../../../components/Footer';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        toast.success("Enviado com sucesso", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <>
            <Navbar page="Contact" />
            <div className="bg-primary h-48 mt-10 items-center">
                <p className="flex text-center justify-center p-14 text-2xlarge font-main text-white">Entre em contato!</p>
            </div>
            <main className='flex gap-10 p-10 max-md:grid grid-cols-1'>
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
                    <section className=" w-1/2 mx-auto font-main max-md:w-full">
                    <p className='font-bold text-large mb-10'>Formulário para contato!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex mb-4 p-3 border border-secondary border-opacity-1 rounded-md">
                            <User size={24} className='self-center mr-5 text-gray-400' />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="text-medium mt-1 block w-full h-10 rounded-md max-sm:text-sm focus:outline-none focus:border-transparent focus:ring-0"
                                required
                                placeholder='Nome'
                            />
                        </div>
                        <div className="mb-4 flex gap-5 justify-between">
                            <div className='flex mb-4 p-3 border border-secondary border-opacity-1 rounded-md'>
                                <Envelope size={24} className='self-center mr-5 text-gray-400 mt-1' />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="text-medium mt-1 block w-full h-10 rounded-md max-sm:text-sm focus:outline-none focus:border-transparent focus:ring-0 "
                                    required
                                    placeholder='Email'
                                />
                            </div>
                            <div className='flex mb-4 p-3 border border-secondary border-opacity-1 rounded-md'>
                                <Phone size={24} className='self-center mr-5 text-gray-400 mt-1' />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="text-medium mt-1 block w-full h-10 rounded-md max-sm:text-sm focus:outline-none focus:border-transparent focus:ring-0"
                                    placeholder='Telefone'
                                />
                            </div>
                        </div>
                        <div className='flex mb-4 p-3 border border-secondary border-opacity-1 rounded-md'>
                            <PencilSimple size={24} className='mr-5 text-gray-400 mt-1' />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="text-medium mt-1 block w-full  rounded-md max-sm:text-sm focus:outline-none focus:border-transparent focus:ring-0"
                                rows={8}
                                required
                                placeholder='Mensagem'
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-10 bg-primary h-16 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </section>
                <div className="border-r border-gray-300 h-50 max-sm:border-b "></div>
                <section className='w-1/2 font-main max-md:w-full '>
                    <p className='font-bold text-large mb-10'>Canais de comunicação</p>
                    <div className='flex h-auto mb-20 w-full relative hover:bg-primary duration-700 '>
                        <div className='bg-primary p-3 h-30'>
                            <WhatsappLogo size={34} className='text-white' />
                        </div>
                        <a
                            href="https://api.whatsapp.com/send?phone=551140722525&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20nosso%20servi%C3%A7o!"
                            className='self-center text-large ml-10 hover:text-white'
                        >
                            <span className='font-bold'>WhatsApp:</span> (11) 98717-5329
                        </a>
                    </div>
                    <div className='flex h-auto mb-20 w-full relative hover:bg-primary duration-700'>
                        <div className='bg-primary p-3 h-30'>
                            <Phone size={34} className='text-white' />
                        </div>
                        <a
                            className='self-center text-large ml-10 hover:text-white'
                            href="tel:+551140722525"
                        >
                            <span className='font-bold'>Telefone:</span> (11) 4072-2525
                        </a>
                    </div>
                    <div
                        className='flex h-auto mb-20 w-full relative hover:bg-primary duration-700'
                    >
                        <div className='bg-primary p-3 h-30'>
                            <Envelope size={34} className='text-white' />
                        </div>
                        <a
                            href="mailto:hxf@hxfequipamentos.com.br"
                            className='self-center text-large ml-10 hover:text-white'
                        >
                            <span className='font-bold'>E-mail:</span> hxf@hxfequipamentos.com.br
                        </a>
                    </div>
                    <div className='flex h-auto mb-20 w-full relative hover:bg-primary duration-700'>
                        <div className='bg-primary p-3 h-30'>
                            <MapPinSimpleArea size={34} className='text-white' />
                        </div>
                        <a
                            href='https://www.google.com.br/maps/place/R.+Marte,+81+-+Serraria,+Diadema+-+SP,+09981-540/@-23.6968427,-46.6095694,16.53z/data=!4m6!3m5!1s0x94ce446410aff7f9:0x3b653ae235cc43c5!8m2!3d-23.6967624!4d-46.6071269!16s%2Fg%2F11c5lcd51g?entry=ttu'
                            className='self-center text-large ml-10 hover:text-white'
                        >
                            <span className='font-bold'>Endereço:</span> R. Marte, 81 - Serraria, Diadema - SP, 09990-000, Brasil
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
