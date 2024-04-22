import { Link } from 'react-router-dom';
import logo from '../../assets/logoBranca.png';

export function Footer() {
    return (
        <footer className="bg-primary flex p-12 flex-wrap rounded-t-2xl max-lg:flex-col w-full">
            <div className='mb-8 lg:w-1/2'>
                <img className='w-80' src={logo} alt="Logo da HXF" />
                <nav className='mt-8 text-white'>
                    <h3 className='text-large font-bold'>Navegação</h3>
                    <ul className='flex flex-col gap-2'>
                        {/* <li><Link to="/">{`> Home`}</Link></li> */}
                        <li><Link to="/hfx">{`> Sobre`}</Link></li>
                        <li><Link to="/product">{`> Produto`}</Link></li>
                        <li><Link to="/service">{`> Serviço`}</Link></li>
                        <li><Link to="/contact">{`> Contato`}</Link></li>
                    </ul>
                </nav>
            </div>
            {/* <div className='w-[1px] bg-white'/> */}
            <div className='text-white lg:w-1/2 lg:border-l-2 lg:px-12 max-lg:py-12 max-lg:border-t-2'>
                <h3 className='text-large font-bold my-4'>Contato</h3>
                <div className='flex flex-col gap-4'>
                    <p>Telefone: (11) 4072-2525</p>
                    <p><a href='mailto:hxf@hxfequipamentos.com.br'>Email: hxf@hxfequipamentos.com.br</a></p>
                    <p>Endereço: R. Marte, 81 - Serraria, Diadema - SP, 09990-000, Brasil</p>
                </div>
            </div>
            <p className='text-center w-full text-white mt-6'>&copy; Desenvolvido por: <a href="mailto:devdynasty@gmail.com">Dev Dynasty</a></p>
        </footer>
    )
}