import { useState } from 'react';
import { Navbar } from "../../../components/Navbar";

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Exemplo: enviar para uma API, etc.
    };

    return (
        <>
            <Navbar page="Contact" />
            <div className="bg-primary h-48 mt-10 items-center">
                <p className="flex text-center justify-center p-14 text-2xlarge font-jost text-white">Entre em contato!</p>
            </div>

            <div className="mt-8 max-w-lg mx-auto">
                <p className='font-bold text-large mb-10'>Formulário para contato!</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="text-medium mt-1 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 max-sm:text-sm"
                            required
                            placeholder='Nome'
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="text-medium mt-1 flex-1 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 max-sm:text-sm"
                            required
                            placeholder='Email'
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="text-medium mt-1 flex-1 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 max-sm:text-small"
                            placeholder='Telefone'
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="text-medium mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 max-sm:text-sm"
                            rows="8"
                            required
                            placeholder='Mensagem'
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </>
    );
}
