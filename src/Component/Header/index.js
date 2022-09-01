import React from 'react'
import instagram from '../../img/instagram-28x.webp'
import whatsapp from '../../img/whatsapp-28x28.webp'
import twitter from '../../img/twitt-28x28.webp'
import facebook from '../../img/facebok-28x28.webp'
import Menu from '../../img/menu-ham.png'
//import cuerpo from '../../img/cuerpo160x79.png'
const menu=[{
  id:'home',
  description:'Home',
  href:'/home',
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
},
]

export const Header = () => {
  
  return (
    <header className="header fixed top-0 h-28 w-full">
      <div className="flex justify-between flex-wrap h-14 items-center bg-c-malva">
        <div className="flex justify-between items-center ml-4">
        <a className="flex-none" href='/'>
          <img className=" " src={facebook} width={35} height={35} alt=''/>
        </a> 
        <a className="pr-4 flex-none" href='/'>
          <img className="" src={twitter} width={30} height={30} alt='' />
        </a>
        <a className="pr-4 flex-none" href='/'>
          <img className="" src={whatsapp} width={20} height={20} alt='' />
        </a>
        <a className="flex-none" href='/'>
          <img className="" src={instagram} width={20} height={20} alt='' />
        </a>
        </div>
        <form className='mr-4'>
          <button className="bg-white border border-c-fondo rounded-md mx-3 hover:bg-transparent">
            <strong className="px-4 font-bold text-c-malva hover:text-c-fondo">Buscar</strong>
          </button>
          <button className="px-2 border border-c-fondo rounded-md hover:bg-c-fondo">
            <strong className="px-2 font-bold text-c-fondo hover:text-c-malva">Login in</strong>
          </button>
        </form>
      </div>
      <nav className="flex justify-between items-center h-14 bg-c-fondo bg-opacity-50">
        <a className="logo text-4xl text-c-malva ml-2 pb-2 sm:ml-20" href='/'>Quiromasaje</a>
        <ul className="hidden ml-96 sm:flex">
          {menu.map((item)=>(
            <li key={item.id} className={`${ item.description ==='Home' ? "bg-orange-200"
            : ""} font px-4 text-1xl font-bold opacity-75 hover:bg-orange-200 text-c-malva`}><strong>{item.description}</strong></li>
          ))}
        </ul>
        <div className="mr-2">
          <img src={Menu} alt="" className="sm:hidden"/>
        </div>
      </nav>   
    </header>
  )
}