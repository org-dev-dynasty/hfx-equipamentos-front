import logo from '../../assets/logoPreta.svg';

export function Footer() {
    return (
        <footer className="bg-primary flex p-12 flex-wrap rounded-t-2xl max-lg:flex-col w-full">
            <div className='mb-8 lg:w-1/3'>
                <img className='w-80' src={logo} alt="Logo da HXF" />
                <nav className='mt-8 text-white'>
                    <h3 className='text-large font-bold'>Navegação</h3>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="/">{`> Home`}</a></li>
                        <li><a href="/">{`> Produto`}</a></li>
                        <li><a href="/">{`> Serviço`}</a></li>
                    </ul>
                </nav>
            </div>
            {/* <div className='w-[1px] bg-white'/> */}
            <div className='text-white lg:w-1/3 lg:border-l-2 lg:border-r-2 lg:px-12 max-lg:py-12 max-lg:border-t-2 max-lg:border-b-2'>
                <h3 className='text-large font-bold my-4'>Contato</h3>
                <div className='flex flex-col gap-4'>
                    <p>Telefone: (11) 9999-9999</p>
                    <p>Email: hxf@hxfequipamentos.com.br</p>
                    <p>Endereço: R. Marte, 81 - Serraria, Diadema - SP, 09980-075, Brasil</p>
                </div>
            </div>
            
            <div className='pl-4 lg:w-1/3'>
                <h3 className='text-white text-large font-bold my-4'>Onde nos encontrar</h3>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.418004768813!2d-46.60970718789276!3d-23.6967623786182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce446410aff7f9%3A0x3b653ae235cc43c5!2sR.%20Marte%2C%2081%20-%20Serraria%2C%20Diadema%20-%20SP%2C%2009981-540!5e0!3m2!1spt-BR!2sbr!4v1713319162086!5m2!1spt-BR!2sbr" 
                    height="400"
                    loading="lazy"
                    className='p-4 w-full'
                ></iframe>
            </div>
        </footer>
    )
}