/* eslint-disable @typescript-eslint/no-explicit-any */
import { X, PlusCircle } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export function ModalCreateProduct(props: any) {
    const [activeTab, setActiveTab] = useState('InfoGerais')
    const [selectTab, setSelectTab] = useState("")

    const [nameProduct, setNameProduct] = useState('')
    const [descriptionProduct, setDescriptionProduct] = useState('')
    const [item, setItem] = useState('')

    const [models, setModels] = useState([])
    const [categories, setCategories] = useState([])
    const [attributes, setAttributes] = useState([])

    function addingCategoryOrModels(type: string, item: string) {
        if(type == 'Models') {
            setModels([...models, item])
        } else {
            setCategories([...categories, item])
        }
    }

    function createProduct() {
        const json = {
            name: nameProduct,
            description: descriptionProduct,
            models: models,
            categories: categories,
            attributes: attributes,
        }
        console.log(json)
    }

    useEffect(() => {
        setAttributes([])
    }, [models, categories, attributes])

    return (
        <section className='bg-[rgba(0,0,0,0.6)] fixed top-0 w-full min-h-screen flex justify-center items-center p-4 z-50'>
            <div className='bg-white w-[90%] p-4 rounded-md'>
                {/* NAVBAR */}
                <nav className="flex items-cente justify-between">
                    <ul className='flex gap-2 max-md:flex-col'>
                        <li onClick={()=>setActiveTab('InfoGerais')} className={`p-2 rounded-t-md cursor-pointer duration-100 hover:bg-primary hover:text-white ${activeTab == 'InfoGerais' ? "bg-primary text-white" : ""}`}>Informações Gerais</li>
                        <li onClick={()=>setActiveTab('Modelos')} className={`p-2 rounded-t-md cursor-pointer duration-100 hover:bg-primary hover:text-white ${activeTab == 'Modelos' ? "bg-primary text-white" : ""}`}>Modelos/Categorias</li>
                        <li onClick={()=>models.length == 0 ? alert('Sem Modelos') : setActiveTab('Atributos')} className={`p-2 rounded-t-md cursor-pointer duration-100 ${models.length == 0 ? "bg-gray-400" : "hover:bg-primary hover:text-white"} ${activeTab == 'Atributos' ? "bg-primary text-white" : ""}`}>Atributos</li>
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
                                <div className="flex">
                                    <label className="flex items-center gap-2 bg-green-500 p-2 text-[#fff] rounded-lg cursor-pointer duration-150 hover:bg-green-700" htmlFor="firstImage">
                                        <PlusCircle size={20}/>Imagem do Produto
                                    </label>
                                    <input className="hidden" type="file" name="firstImage" id="firstImage" />
                                </div>
                            </form>
                        </div>
                        {/* IMAGENS PRODUTO */}
                        <div className="bg-[#fff] shadow-2xl rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center justify-between w-full">
                                    <h1 className="text-medium font-semibold">Imagens</h1>
                                    <label className="flex items-center gap-2 bg-green-500 p-2 text-[#fff] rounded-lg cursor-pointer duration-150 hover:bg-green-700" htmlFor="moreImage">
                                        <PlusCircle size={20}/>Adicionar Imagem
                                    </label>
                                </div>
                                <input className="hidden" type="file" name="moreImage" id="moreImage"/>
                            </div>
                            <ul className="ml-4 list-disc">
                                <li>Imagem 1</li>
                                <li>Imagem 2</li>
                                <li>Imagem 3</li>
                            </ul>
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
                        <div className="flex gap-2">
                            <button onClick={()=>setSelectTab('Models')} className={`text-white w-1/2 py-2 font-semibold rounded-lg ${selectTab == "Models" ? "bg-primary" : "bg-gray-500 hover:bg-gray-600"}`}>Modelo</button>
                            <button onClick={()=>setSelectTab('Category')} className={`text-white w-1/2 py-2 font-semibold rounded-lg ${selectTab == "Category" ? "bg-primary" : "bg-gray-500 hover:bg-gray-600"}`}>Categoria</button>
                        </div>
                        <div>
                            {selectTab != '' && (
                                <div className="flex gap-4 mt-4">
                                    <input onChange={(e)=>setItem(e.target.value)} className="border-b-2 border-l-2 p-2 border-primary rounded-bl-lg bg-white focus:outline-none" type="text" placeholder={selectTab == 'Models' ? 'Modelo' : 'Categoria'} />
                                    <button onClick={()=>addingCategoryOrModels(selectTab, item)} className="flex items-center gap-2 p-2 rounded-md text-white bg-green-500 hover:bg-green-700"><PlusCircle size={24}/> Adicionar</button>
                                </div>
                            )}
                            {selectTab == 'Models' && (
                                <div className="bg-[#fff] mt-4 p-4 shadow-2xl rounded-xl">
                                    {models.length != 0 ? models.map((item: any) => (
                                            <div>
                                                <label>{item}</label>
                                            </div>
                                        )
                                    ) : 
                                    <div className="flex justify-center">
                                        <label>Nenhum Modelo</label>
                                    </div>
                                    }
                                </div>
                            )}
                            {selectTab == 'Category' && (
                                <div className="bg-[#fff] mt-4 p-4 shadow-2xl rounded-xl">
                                    {categories.length != 0 ? categories.map((item: any) => (
                                            <div>
                                                <label>{item}</label>
                                            </div>
                                        )
                                    ) : 
                                    <div className="flex justify-center">
                                        <label>Nenhum Modelo</label>
                                    </div>
                                    }
                                </div>
                            )}
                        </div>
                    </aside>
                )}

                {activeTab === 'Atributos' && (
                    <aside className='border-2 border-primary p-4'>
                    </aside>
                )}
                <div className="flex justify-center mt-4">
                    <button onClick={()=>createProduct()} className="bg-green-500 text-white p-2 rounded-lg w-1/5 hover:bg-green-700">Salvar</button>
                </div>
            </div>
        </section>
    )
}