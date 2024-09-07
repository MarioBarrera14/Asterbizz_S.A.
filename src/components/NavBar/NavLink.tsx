import Link from 'next/link'
import React from 'react'

export interface NavLinkProps{
    title:string,
    href:string,
    className:string,//w-full h-[45px]
}

function NavLink({title,href,className}:NavLinkProps) {
    return (
        <Link className={className} href={href}>
            <p className=" text-center  ">
                {title}
            </p>
        </Link>
    )
}

export default NavLink



