/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { MagnifyingGlass, Plus, X } from '@phosphor-icons/react';
import { ProductContext } from '../../../context/product_context';

import CreateProductImage from '../../../assets/CreateProductImage.png';
import CreateProductExistImage from '../../../assets/CreateProductExistImage.png';
import { ModalCreateProduct } from '../../../components/ModalCreateProduct';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export function Products() {
    const [searchInput, setSearchInput] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [createProductModal, setCreateProductModal] = useState(false);
    
    const { getAll, deleteProduct } = useContext(ProductContext)
    const [products, setProducts] = useState([])

    function handleCreateProduct() {
        setShowModal(false)
        setCreateProductModal(true)
    }

    async function handleDeleteProduct(id: string) {
        const response = await deleteProduct(id)
        if((response as { message: string }).message === 'Product deleted successfully'){
            toast.success('Produto deletado com sucesso!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        } else {
            toast.error('Erro ao deletar produto!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    function viewProduct(id: any) {
        localStorage.setItem('product', id)
        window.location.href = '/productDetail'
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            window.location.href = "/admin/login"
        }
    }, [])

    useEffect(() => {
        const response = getAll()
        response.then((res : any) => {
            setProducts(res.products)
            // console.log(res.products)
        }).catch((error) => {
            console.log("error "+ error)
        })
    }, [])

    return (
        <>
        <main className="m-4">
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <h1 className="text-3xl font-jost mb-2">Produtos</h1>
            <hr className="border-black"/>
            <section className="flex items-center my-5">
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
            </section>

            <section>    
                <div className="flex flex-wrap gap-10 justify-center">
                    {products.map((product : any) => (
                        <div key={product.id} className="group w-72 cursor-pointer shadow-2xl rounded-b-xl" onClick={() => {}}>
                            <button onClick={()=>viewProduct(product.id)} type='button' className="w-full relative group overflow-hidden rounded-t-xl shadow-md duration-300">
                                <div className='absolute z-10 w-full h-full flex justify-center items-center'>
                                    <MagnifyingGlass size={42} className="text-secondary opacity-0 duration-300 group-hover:opacity-100" />
                                </div>
                                <img
                                    src={product.image ? product.image : 'https://via.placeholder.com/500x500'}
                                    alt={product.name}
                                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:brightness-50 transform group-hover:scale-110"
                                />
                            </button>
                            <div className="bg-white p-4 rounded-b-xl text-center">
                                <p className="text-lg font-semibold">{product.name}</p>
                                <div className='flex'>
                                    <button className="text-primary w-full font-bold opacity-0 duration-300 group-hover:opacity-100">Editar</button>
                                    <button onClick={()=>handleDeleteProduct(product.id)} className="text-red-500 w-full font-bold opacity-0 duration-300 group-hover:opacity-100">Excluir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4 mr-8">
                    <button type='button' onClick={()=>setShowModal(true)} className="flex gap-2 items-center bg-green-600 px-4 py-2 text-white font-bold rounded-md duration-300 hover:bg-green-700">
                        <Plus size={20} />
                        Adicionar
                    </button>
                </div>
            </section>
        </main>

        {showModal && (
            <section className='bg-[rgba(0,0,0,0.6)] fixed top-0 w-full min-h-screen p-4 z-50'>
                <div className="flex items-center justify-end">
                    <button onClick={()=>setShowModal(false)}>
                        <X className='text-white' size={42}/>
                    </button>
                </div>
                <div className='min-h-screen flex justify-evenly items-center gap-4 max-sm:flex-col'>
                    <button type='button' onClick={handleCreateProduct} className="h-auto relative group overflow-hidden rounded-xl shadow-md duration-300">
                        <img
                            src={CreateProductImage}
                            alt='name'
                            className="w-full md:h-96 object-cover transition-transform duration-300 brightness-50 transform group-hover:scale-110"
                        />
                        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                            <label className="text-white text-large duration-500 group-hover:text-xlarge hover:cursor-pointer">Criar um novo Produto</label>
                        </div>
                    </button>
                    <button type='button' className="h-auto relative group overflow-hidden rounded-xl shadow-md duration-300">
                        <img
                            src={CreateProductExistImage}
                            alt='name'
                            className="w-full md:h-96 object-cover transition-transform duration-300 brightness-50 transform group-hover:scale-110"
                        />
                        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                            <label className="text-white text-large duration-500 group-hover:text-xlarge hover:cursor-pointer">Criar um modelo/categoria de um produto existente</label>
                        </div>
                    </button>
                </div>
            </section>
        )}

        {createProductModal && (
            <ModalCreateProduct callbackParent={(bool : boolean)=> setCreateProductModal(bool)}/>
        )}
        </>
    );
}
