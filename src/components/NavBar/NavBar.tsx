'use client'
import { Iceland } from 'next/font/google'
import React from 'react'
import IconMenu from '../icons/IconMenu'
import './NavBar.css'
import { useState } from 'react'
import IconClose from '../icons/IconClose'
import Image from 'next/image'
import NavLink, { NavLinkProps } from './NavLink'

const NavLinkClassName="w-full md:w-[150px] h-[45px]"

const iceland=Iceland({subsets:["latin"],weight:'400'})

const links:NavLinkProps[]=[
    {
        title:"Home",
        className:NavLinkClassName,
        href:"/"
    },
    {
        title:"Sobre Nosotros",
        className:NavLinkClassName,
        href:"/about"
    },
    {
        title:"Contacto",
        className:NavLinkClassName,
        href:"/contacto"
    },
    {
        title:"Proyectos",
        className:NavLinkClassName,
        href:"/proyectos"
    },
]


function NavBar() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <nav className='w-full sticky top-0 flex items-center justify-between h-[80px] bg-gradient-to-t from-terciary-light/15 to-primary-darker/30 backdrop-blur-lg shadow-md z-[1000]  '>
            <div className='logo text-2xl font-bold w-fit pl-8'>
                 <Image src={"/Logos.png"} width={200} height={200} alt='logo'></Image>
             
 
{/*             <p className={iceland.className+' text-4xl'}><span className=' text-3xl'>🛸</span> AsterBizz</p>
 */} </div>
            <div className='hidden sm:flex text-xl w-[80%] h-full justify-end items-end gap-5 pr-5'>
                {links.map((item,index)=>{
                    return <NavLink key={index} className={item.className} href={item.href} title={item.title}/>
                })}
            </div>
            <div className={isOpen ? "hidden" : "block" + ' pl-[13px] sm:hidden  w-[100px] h-full flex justify-center items-center'}
                onClick={() => setIsOpen(true)}>
                <IconMenu className='fill-purple-300' />
            </div>
            <div className={isOpen ? "flex flex-col absolute top-0 right-0 w-[200px] min-h-[300px] h-fit bg-gradient-to-t from-primario-light/90 to-primario-dark/90 backdrop-blur-[300px]  text-white pt-5 rounded-bl-2xl " : "hidden"}>
                <div className='flex justify-between px-3 h-[45px] w-full' onClick={() => setIsOpen(false)}>
                    <p className='font-bold'>Cerrar Menú</p>
                    <IconClose className='fill-[#fff]' />
                </div>
                <div className='flex flex-col justify-between w-full h-full py-3 gap-5'>
                {links.map((item,index)=>{
                    return <NavLink key={index} className={item.className} href={item.href} title={item.title}/>
                })}

                </div>
            </div>
        </nav>
    )
}

export default NavBar

