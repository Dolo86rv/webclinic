import React from 'react'
import instagram from '../../img/instagram-28x.webp'
import whatsapp from '../../img/whatsapp-28x28.webp'
import twitter from '../../img/twitt-28x28.webp'
import facebook from '../../img/facebok-28x28.webp'
//import chiromassage from '../../img/quiromasaje-1024x455.png'
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
    <header className="header fixed top-0 h-40 w-full">
      <div className="flex justify-around h-12 items-center bg-c-malva">
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
        <form className='border border-cyan-50 rounded-md bg-transparent'>
          <button class="px-2 font text-white font-bold">
            Login in
          </button>
        </form>
      </div>
      <nav className="flex justify-between items-center h-28">
        <a className="logo text-4xl text-c-rose pl-20" href='/'><strong>Quiromasaje</strong></a>
        <ul className="flex items-center pr-12">
          {menu.map((item)=>(
            <li key={item.id} className={`${ item.description ==='Home' ? "bg-orange-200 h-2 "
            : ""} font px-4 text-c-rose text-1xl font-bold hover:bg-orange-200`}><strong>{item.description}</strong></li>
          ))}
        </ul>
      </nav>   
    </header>
  )
}
/*{`${ item.id ==='ingreso' ? ""
               : ""} menu px-4 text-c-rose text-1xl`} */

/*<nav className="flex fixed top-0 w-full min-w-full h-40 bg-head-lienzo bg-no-repeat bg-cover shadow-2xl">
      <img className='flex-none top-0 left-0 mr-2' src={cuerpo} alt="" />
      <div className="flex-1 ml-32 mt-7">
          <p className='logo text-c-malva text-5xl pb-2 font-medium'>Valentina Delgado</p>
          <p className='text-3xl pt-2 ml-16'>Quiromasaje</p>
        </div>
        <div className="flex-1 self-end ml-96 items-end">
          <div className="">

          </div>
          <div className="flex pl-20 pb-4">
            <img className="px-3 border-r-2 border-r-c-fondo" src={facebook} width={50} height={50} alt='' /> 
            <img className="px-3 border-r-2 border-c-fondo" src={twitter} width={50} height={50} alt='' />
            <img className="px-3 border-r-2 border-c-fondo" src={whatsapp} width={50} height={50} alt='' />
            <img className="px-3" src={instagram} width={50} height={50} alt='' />
          </div>
        </div>
    </nav>
    <img className="object-cover" src={chiromassage} alt=''/>
    */