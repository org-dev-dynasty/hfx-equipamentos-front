/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product_context';
import { PlusCircle, X } from '@phosphor-icons/react';

export function ModalProductExist(props: any) {
    const [area, setArea] = useState(false)

    const [products, setProducts] = useState([])
    const [productSelected, setProductSelected] = useState<any>({})
    const [images, setImages] = useState<any>([])

    const { getAll, getById, deleteModelOrCategory, uploadImage } = useContext(ProductContext)

    function handleGetProduct(id: string) {
        const response = getById(id)
        localStorage.setItem('productId', id)
        response.then((res: any) => {
            setProductSelected(res)
            setArea(true)
            console.log(response)
        }).catch((err: any) => {
            console.log(err)
        })
    }

    async function sendImages() {
        const response = await uploadImage(productSelected, images)
        console.log(response)
    }

    function delModelOrCategory(productId: string, type: string, id: string) {
        console.log(productId, type, id)
        const response = deleteModelOrCategory(productId, type, id)
        response.then((_res: any) => {
            toast.success('Modelo/Categoria deletado com sucesso!', {
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
        }).catch((_err: any) => {
            toast.error('Erro ao deletar Modelo/Categoria!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    useEffect(() => {
        const response = getAll()
        response.then((res: any) => {
            setProducts(res.products)
        }).catch((err: any) => {
            console.log(err)
        })
    }, [])

    return (
        <section className='bg-[rgba(0,0,0,0.6)] fixed top-0 w-full min-h-screen flex justify-center items-center p-4 z-50'>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <div className='bg-white w-[90%] p-4 rounded-md'>
                <div className='flex justify-end'>
                    <X className='cursor-pointer' size={32} onClick={()=>props.callbackParent(false)}/>
                </div>
                <div className={`${area ? "hidden" : ""}`}>
                    <h1 className='text-large font-bold text-center'>Escolha um Produto para alterar seu modelo/Categoria</h1>
                    {products.map((product: any) => (
                        <div key={product.id} className='flex items-center justify-between border-b border-gray-200 py-2'>
                            <p>{product.name}</p>
                            <button onClick={()=>handleGetProduct(product.id)} className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>Alterar</button>
                        </div>
                    ))}
                </div>
                <div className={`${area ? "" : "hidden"}`}>
                    {productSelected.models && (
                        <>
                        <h1 className='text-xlarge font-bold text-center'>{productSelected.name}</h1>
                        <h3 className='text-medium font-semibold'>Modelos: </h3>
                        <div className='flex gap-4 flex-wrap my-4'>
                            {productSelected.models.map((model: any) => (
                                <div key={model.id} className='border p-2 flex flex-col items-center'>
                                    <p>{model.split('#')[0]}</p>
                                    <button onClick={()=>delModelOrCategory(localStorage.getItem('productId') || '', 'Model', model.split('#')[0])} className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700'>Deletar</button>
                                </div>
                            ))}
                        </div>
                        </>
                    )}
                    {productSelected.categories && (
                        <>
                        <h1 className='text-xlarge font-bold text-center'>{productSelected.name}</h1>
                        <div className="bg-[#fff] rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-medium font-semibold">Imagens (no máximo 3)</h1>
                                    <label className="flex items-center gap-2 bg-green-500 p-2 text-[#fff] rounded-lg cursor-pointer duration-150 hover:bg-green-700" htmlFor="moreImage">
                                        <PlusCircle size={20}/>Adicionar Imagem
                                    </label>
                                </div>
                                <input onChange={(e) => setImages(images.length < 3 ? [...images, e.target.files] : images)} className="hidden" type="file" name="moreImage" id="moreImage"/>
                            </div>
                            <ul className="ml-4 list-disc">
                                {images.map((item: any) => (
                                    <li key={item}>{item[0].name}</li>
                                ))}
                            </ul>
                            <button onClick={() => sendImages()} className='bg-green-500 p-2 text-[#fff] rounded-lg duration-150 hover:bg-green-700'>
                                Enviar
                            </button>
                        </div>
                        <h3 className='text-medium font-semibold'>category: </h3>
                        <div className='flex gap-4 flex-wrap my-4'>
                            {productSelected.categories.map((category: any) => (
                                <div key={category.id} className='border p-2 flex flex-col items-center'>
                                    <p>{category.split('#')[0]}</p>
                                    <button onClick={()=>delModelOrCategory(localStorage.getItem('productId') || '', 'Category', category.split('#')[0])} className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700'>Deletar</button>
                                </div>
                            ))}
                        </div>
                        </>
                    )}
                </div>  
            </div>
        </section>
    )
}