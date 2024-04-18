import { useState } from 'react';
import { MagnifyingGlass, MagnifyingGlassPlus } from '@phosphor-icons/react';
// import Modal from './Modal'; 

export function Products() {
    const [searchInput, setSearchInput] = useState('');
    // const [selectedProduct, setSelectedProduct] = useState(null); 

    const products = [
        { id: 1, title: 'Produto 1', image: 'https://example.com/product1.jpg', description: 'Descrição do Produto 1' },
        { id: 2, title: 'Produto 2', image: 'https://example.com/product2.jpg', description: 'Descrição do Produto 2' },
        { id: 3, title: 'Produto 3', image: 'https://example.com/product3.jpg', description: 'Descrição do Produto 3' },
        { id: 4, title: 'Produto 4', image: 'https://example.com/product4.jpg', description: 'Descrição do Produto 4' }
    ];

    // const openModal = (product) => {
    //     setSelectedProduct(product);
    // };

    // const closeModal = () => {
    //     setSelectedProduct(null);
    // };

    return (
        <div className="m-4">
            <h1 className="text-3xl font-jost mb-2">Produtos</h1>
            <hr className="border-black"/>
            <div className="flex items-center my-5 ">
                <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-1/3 mx-auto mr-0 flex border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="mr-auto h-10 ml-1 bg-blue-500 text-white px-4 py-2 rounded-r-lg flex items-center justify-center">
                    <MagnifyingGlass size={24} className="h-5 w-5" />
                </button>
            </div>

            <div className="flex flex-wrap gap-10 justify-center">
                {products.map((product) => (
                    <div key={product.id} className="w-72 cursor-pointer" onClick={() => openModal(product)}>
                        <div className="group overflow-hidden rounded shadow-md">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-105"
                            />
                            <div className="overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300">
                                <MagnifyingGlassPlus size={32} className="h-10 w-10 text-orange-500"/>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-b">
                            <p className="text-lg font-semibold">{product.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* {selectedProduct && (
                <Modal
                    product={selectedProduct}
                    closeModal={closeModal}
                />
            )} */}
        </div>
    );
}
