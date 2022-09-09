import { HashLink as Link } from 'react-router-hash-link'
import Menu from '../../img/menu-ham.png'

const menu=[{
        id:'home',
        description:'Home',
        href:'/',
        subMenu:[]
    },
    {
        id:'servicio',
        description:'Servicios',
        href:'/servicio',
        subMenu:[]
    },
    {
        id:'nosotros',
        description:'Sobre nosotros',
        href:'/nosotros',
        subMenu:[]
    },
    {
        id:'contacto',
        description:'Contacto',
        href:'/contacto',
        subMenu:[]
    },
    {
        id:'solicitarServicio',
        description:'Solicitar servicio',
        href:'/solicitarservicio',
        subMenu:[]
}]

export const Navbar = () => {
    
    return (
    <nav className="flex justify-between items-center max-h-28 sm:h-14 bg-c-fondo bg-opacity-50">
        <Link className="logo text-3xl text-c-malva ml-2 pb-2 sm:text-4xl sm:ml-20 sm:mr-2" to='/'>Quiromasaje</Link>
        <ul className="hidden sm:flex">
        {menu.length > 0 && menu.map((item)=>(
            <Link key={item.id} to={item.href}  className="texto2 text-xl font-bold px-4 opacity-75 hover:bg-orange-200 text-c-malva"><strong>{item.description}</strong></Link>
        ))}
        </ul>
        <div className="mx-2 flex-none">
            <img src={Menu} alt="menu" className="sm:hidden px-2"/>
        </div>
    </nav>   
)}


/*<nav className="flex justify-between items-center max-h-28 sm:h-14 bg-c-fondo bg-opacity-50">
        <Link className="logo text-3xl text-c-malva ml-2 pb-2 sm:text-4xl sm:ml-20 sm:mr-2" to='/'>Quiromasaje</Link>
        <ul className="hidden sm:flex">
        {menu.map((item)=>(
            <Link key={item.id} to={item.href}  className="texto2 text-xl font-bold px-4 opacity-75 hover:bg-orange-200 text-c-malva"><strong>{item.description}</strong></Link>
        ))}
        </ul>
        <div className="mx-2 flex-none">
            <img src={Menu} alt="menu" className="sm:hidden px-2"/>
        </div>
    </nav>   
    
    
    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">

                        </div>
                        <div className="relative z-10">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="uppercase tracking-wide text-gray-500 font-medium text-[13px]">Servicios</p>
                                </div>

                            </div>
                        </div>

     <ul className="flex">
        <li className=" static hover:bg-blue-800 hover:text-white">
            <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white">Hover</a>
            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
              <div className="container mx-auto w-full flex flex-wrap justify-between">
                <div className="w-full text-white mb-8">
                  <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
                  <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                </div>
                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                  <div className="flex items-center">
                    <svg className="h-8 mb-3 mr-3 fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                    </svg>
                    <h3 className="font-bold text-xl text-white text-bold mb-2">Heading 1</h3>
                  </div>
                  <p className="text-gray-100 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                  <div className="flex items-center py-3">
                    <svg className="h-6 pr-3 fill-current text-blue-300"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/>
                    </svg>
                    <a href="#" className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                  </div>
                </ul>
                </div>
               </div>
            </li>
         </ul>


    */
