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
        {menu.map((item)=>(
            <Link key={item.id} to={item.href}  className="texto2 text-xl font-bold px-4 opacity-75 hover:bg-orange-200 text-c-malva"><strong>{item.description}</strong></Link>
        ))}
        </ul>
        <div className="mx-2 flex-none">
            <img src={Menu} alt="menu" className="sm:hidden px-2"/>
        </div>
    </nav>   
)}
