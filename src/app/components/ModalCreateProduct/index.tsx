/* eslint-disable @typescript-eslint/no-explicit-any */
import { X, PlusCircle } from "@phosphor-icons/react"
import { useContext, useEffect, useState } from "react"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ProductContext } from "../../context/product_context";

export function ModalCreateProduct(props: any) {
    const [activeTab, setActiveTab] = useState("InfoGerais")
    const [selectTab, setSelectTab] = useState("")
    const [activeItem, setActiveItem] = useState("")

    const [nameProduct, setNameProduct] = useState("")
    const [descriptionProduct, setDescriptionProduct] = useState("")
    const [littleDescription, setLittleDescription] = useState([""])
    const [item, setItem] = useState('')
    const [specifi, setSpecifi] = useState("")
    const [valueSpecifi, setValueSpecifi] = useState("")

    const [models, setModels] = useState<any>([])
    const [categories, setCategories] = useState<any>([])
    const [attributes, setAttributes] = useState<any>([])

    const { create } = useContext(ProductContext)

    function addingCategoryOrModels(type: string, item: string) {
        if(item == ''){
            return toast.error("Campo Vazio", {
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
        if(type == 'Models') {
            setModels([...models, item])
            setAttributes([...attributes, {modelId: item}])
        } else if (type == 'Category') {
            setCategories([...categories, item])
            setAttributes([...attributes, {categoryId: item}])
        } else {
            toast.error("Erro ao Adicionar", {
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
    function deleteCategoryOrModels(type: string, item: string) {
        if(type == 'Models') {
            setModels(models.filter((i: any) => i !== item))
            setAttributes(attributes.filter((i: any) => i.modelId !== item))
        } else {
            setCategories(categories.filter((i: any) => i !== item))
            setAttributes(attributes.filter((i: any) => i.modelId !== item))
        }
    }
    function addingAttributes(model: string, specification: string, value: string) {
        if(specification == '' || value == ''){
            return toast.error("Campo Vazio", {
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
        for(let i = 0; i < attributes.length; i++){
            if(attributes[i].modelId == model){
                console.log({[String(specification)]: value})
                attributes[i] = {...attributes[i], [String(specification)]: value}
                setAttributes([...attributes])
                console.log(attributes)
                setSpecifi("")
                setValueSpecifi("")
            } else if(attributes[i].categoryId == model) {
                attributes[i] = {...attributes[i], [String(specification)]: value}
                setAttributes([...attributes])
                setSpecifi("")
                setValueSpecifi("")
            }
        }
    }
    function deleteAttributes(model: string, specification: string) {
        // console.log(model, specification)
        for(let i = 0; i < attributes.length; i++){
            if(attributes[i].categoryId == model){
                delete attributes[i][specification]
            } else if(attributes[i].modelId == model){
                delete attributes[i][specification]
            } else {
                toast.error("Erro ao Deletar", {
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
            setSpecifi("")
            setValueSpecifi("")
        }
    }   
    async function createProduct() {
        const json: { name: string; description: string; littleDescription: any[]; attributes?: any[]; models?: any[]; categories?: any[]; } = {
            name: nameProduct,
            description: descriptionProduct,
            littleDescription: littleDescription,
        }
        if(models.length != 0){
            json.models = models
            json.attributes = attributes
        } else if(categories.length != 0){
            json.categories = categories
            json.attributes = attributes
        } else {
            ''
        }
        console.log(json)
        const response = await create(json)
        if(response){
            toast.success('Produto Criado com Sucesso', {
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
                props.callbackParent(false)
            }, 3000);
        } else {
            toast.error("Erro ao criar produto", {
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

    useEffect(() => {
    }, [models, categories, attributes])

    return (
        <section className='bg-[rgba(0,0,0,0.6)] fixed top-0 w-full min-h-screen flex justify-center items-center p-4 z-50'>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            <div className='bg-white w-[90%] p-4 rounded-md'>
                {/* NAVBAR */}
                <nav className="flex items-cente justify-between">
                    <ul className='flex gap-2 max-md:flex-col'>
                        <li onClick={()=>setActiveTab('InfoGerais')} className={`p-2 rounded-t-md cursor-pointer duration-100 hover:bg-primary hover:text-white ${activeTab == 'InfoGerais' ? "bg-primary text-white" : ""}`}>Informações Gerais</li>
                        <li onClick={()=>setActiveTab('Modelos')} className={`p-2 rounded-t-md cursor-pointer duration-100 hover:bg-primary hover:text-white ${activeTab == 'Modelos' ? "bg-primary text-white" : ""}`}>Modelos/Categorias</li>
                        <li onClick={()=>(models.length == 0 && categories.length == 0) ? "" : setActiveTab('Atributos')} className={`p-2 rounded-t-md cursor-pointer duration-100 ${(models.length == 0 && categories.length == 0) ? "bg-gray" : "hover:bg-primary hover:text-white"} ${activeTab == 'Atributos' ? "bg-primary text-white" : ""}`}>Atributos</li>
                    </ul>
                    <button onClick={() => props.callbackParent(false)}>
                        <X size={32}/>
                    </button>
                </nav>

                {activeTab === 'InfoGerais' && (
                    <aside className='border-2 border-primary grid grid-cols-2 gap-2 rounded-lg rounded-tl-none p-4 max-md:grid-cols-1'>
                        {/* INFORMAÇÃO GERAIS */}
                        <div className="row-span-2 bg-[#fff] shadow-2xl rounded-xl p-4">
                            <h1 className="text-medium font-semibold mb-2">Informações Gerais</h1>
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <input onChange={(e)=>setNameProduct(e.target.value)} value={nameProduct} className="border-b-2 border-l-2 border-primary rounded-bl-xl p-2 max-lg:w-full focus:outline-none" type="text" placeholder="Nome do Produto: " />
                                </div>
                                <div className="flex flex-col">
                                    <textarea onChange={(e)=>setDescriptionProduct(e.target.value)} value={descriptionProduct} rows={6} className="border-b-2 border-l-2 border-primary rounded-bl-xl p-2 focus:outline-none" placeholder="Descrição do Produto: " />
                                </div>
                            </form>
                        </div>
                        {/* IMAGENS */}
                        <div className="bg-[#fff] shadow-2xl rounded-xl p-4">
                            <h1 className="text-medium font-semibold">Pequena Descrição</h1>
                            <input onChange={(e)=>setLittleDescription([e.target.value])} className="border-b-2 border-l-2 border-primary rounded-bl-xl p-2 w-full focus:outline-none" type="text" />
                        </div>
                        {/* VÍDEOS PRODUTO */}
                        <div className="bg-[#fff] shadow-2xl rounded-xl p-4">
                            <div className="mb-2">
                                <h1 className="text-medium font-semibold">Videos</h1>
                                <input className="border-b-2 border-l-2 border-primary rounded-bl-xl p-2 w-full focus:outline-none" type="text" placeholder="https://www.youtube.com/..." />
                            </div>
                            <ul className="ml-4 list-disc">
                                <li>Video 1</li>
                                <li>Video 2</li>
                                <li>Video 3</li>
                            </ul>
                        </div>
                    </aside>
                )}

                {activeTab === 'Modelos' && (
                    <aside className='border-2 border-primary p-4'>
                        {/* ESCOLHER TIPO */}
                        <div className="flex gap-2 max-sm:flex-col">
                            <button disabled={categories.length > 0} onClick={()=>setSelectTab('Models')} className={`text-white w-1/2 py-2 font-semibold rounded-lg ${selectTab == "Models" ? "bg-primary" : "bg-gray hover:bg-gray-600"} max-sm:w-full`}>Modelo</button>
                            <button disabled={models.length > 0} onClick={()=>setSelectTab('Category')} className={`text-white w-1/2 py-2 font-semibold rounded-lg ${selectTab == "Category" ? "bg-primary" : "bg-gray hover:bg-gray-600"} max-sm:w-full`}>Categoria</button>
                        </div>
                        <div>
                            {selectTab != '' && (
                                <div className="flex gap-4 mt-4 max-sm:flex-col">
                                    <input onChange={(e)=>setItem(e.target.value)} className="border-b-2 border-l-2 p-2 border-primary rounded-bl-lg bg-white focus:outline-none" type="text" placeholder={selectTab == 'Models' ? 'Modelo' : 'Categoria'} />
                                    <button onClick={()=>addingCategoryOrModels(selectTab, item)} className="flex items-center gap-2 p-2 rounded-md text-white bg-green-500 hover:bg-green-700"><PlusCircle size={24}/> Adicionar</button>
                                </div>
                            )}
                            {selectTab == 'Models' && (
                                <div className="bg-[#fff] mt-4 p-4 shadow-2xl rounded-xl flex gap-8 flex-wrap">
                                    {models.length != 0 ? models.map((item: any) => (
                                            <div key={item} className="items-center gap-8 inline-flex border-2 rounded-lg p-2">
                                                <label>{item}</label>
                                                <X className="cursor-pointer" size={24} color="#f00" onClick={()=>deleteCategoryOrModels('Models', item)}/>
                                            </div>
                                        )
                                    ) : 
                                    <div>
                                        <label>Nenhum Modelo</label>
                                    </div>
                                    }
                                </div>
                            )}
                            {selectTab == 'Category' && (
                                <div className="bg-[#fff] mt-4 p-4 shadow-2xl rounded-xl flex gap-8 flex-wrap">
                                    {categories.length != 0 ? categories.map((item: any) => (
                                        <div key={item} className="items-center gap-8 inline-flex border-2 rounded-lg p-2">
                                            <label>{item}</label>
                                            <X className="cursor-pointer" size={24} color="#f00" onClick={()=>deleteCategoryOrModels('Category', item)}/>
                                        </div>
                                    )
                                    ) : 
                                    <div>
                                        <label>Nenhuma Categoria</label>
                                    </div>
                                    }
                                </div>
                            )}
                        </div>
                    </aside>
                )}

                {activeTab === 'Atributos' && (
                    <aside className='border-2 border-primary p-4'>
                        <div className="mb-4 flex gap-4">
                            <input onChange={(e)=>setSpecifi(e.target.value)} value={specifi} className="bg-white border-b-2 border-l-2 border-primary rounded-bl-xl p-2 max-lg:w-full focus:outline-none" type="text" placeholder="Nome da Especificação: " />
                            <input onChange={(e)=>setValueSpecifi(e.target.value)} value={valueSpecifi} className="bg-white border-b-2 border-l-2 border-primary rounded-bl-xl p-2 max-lg:w-full focus:outline-none" type="text" placeholder="Valor com medidas: " />
                            <button onClick={()=>addingAttributes(activeItem, specifi, valueSpecifi)} className="bg-green-500 text-white px-8 rounded-lg duration-150 hover:bg-green-700">Adicionar</button>
                        </div>
                        
                        <div className="flex">
                            <div className="w-1/6">
                                <div className="flex flex-col gap-2 pl-2">
                                    {models.map((model: any) => (
                                        <label onClick={()=>setActiveItem(model)} className={`rounded-l-lg shadow-lg p-2 ${activeItem == model ? "bg-primary text-white" : ""}`} key={model}>{model}</label>
                                    ))}
                                    {categories.map((category: any) => (
                                        <label onClick={()=>setActiveItem(category)} className={`rounded-l-lg shadow-lg p-2 ${activeItem == category ? "bg-primary text-white" : ""}`} key={category}>{category}</label>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 w-5/6 shadow-xl">
                                <div className="flex gap-4 flex-wrap">
                                    {activeItem !== '' && (
                                        attributes.map((item: any) => (
                                            item.modelId === activeItem ? 
                                                Object.keys(item).map((key: any) => (
                                                    key !== 'modelId' ? 
                                                        <div key={key} className="border-2 p-2 flex gap-4">
                                                            <div>
                                                                <label className="font-bold">{key}: </label>
                                                                <label>{item[key]}</label>
                                                            </div>
                                                            <X onClick={()=>deleteAttributes(item['modelId'], key)} className="cursor-pointer" size={24} color="#f00"/>
                                                        </div>
                                                    : null
                                                ))
                                            : null
                                        ))
                                    )}
                                    {activeItem !== '' && (
                                        attributes.map((item: any) => (
                                            item.categoryId === activeItem ? 
                                                Object.keys(item).map((key: any) => (
                                                    key !== 'categoryId' ? 
                                                        <div key={key} className="border-2 p-2 flex gap-4">
                                                            <div>
                                                                <label className="font-bold">{key}: </label>
                                                                <label>{item[key]}</label>
                                                            </div>
                                                            <X onClick={()=>deleteAttributes(item['categoryId'], key)} className="cursor-pointer" size={24} color="#f00"/>
                                                        </div>
                                                    : null
                                                ))
                                            : null
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </aside>
                )}
                    
                {/* BUTTON SALVAR */}
                <div className="flex justify-center mt-4">
                    <button onClick={()=>createProduct()} className="bg-green-500 text-white p-2 rounded-lg w-1/5 hover:bg-green-700">Salvar</button>
                </div>
            </div>
        </section>
    )
}