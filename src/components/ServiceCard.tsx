import React from 'react'

interface ServiceCardProps {
    icon?: React.ReactNode,
    title?: string,
    className?: string
    children: React.ReactNode,
}

function ServiceCard({ icon, title, className, children }: ServiceCardProps) {
    return (
        <div className={"  bg-circles bg-repeat bg-cover   text-black rounded-xl   relative min-w-[300px] min-h-[200px] shadow-xl hover:scale-105 transition-all hover:transition-all ease-in-out " + " " + className}>
            <div className='w-full h-full bg-gradient-to-t from-primary-darker/90 via-primary-darker/75 to-primary-darker/90 backdrop-blur-[8px] p-6 flex flex-col justify-between  border-white/30 border-[3px] rounded-xl'>
                <h3 className="text-2xl font-bold flex items-center mb-[1.2rem] text-purple-100 drop-shadow-lg">
                    {icon}
                    {title}
                </h3>
                <div className='w-full min-h-[100px] max-h-[300px] font-[400] text-xl text-purple-100'>
                    {children}
                </div>
                <div className='w-full h-[30px] mt-[1rem] flex items-start justify-center'>
                    <div className='w-fit h-fit px-3 py-2 absolute  bg-gradient-to-t from-seconday/30 to-seconday-lighter/40 text-purple-100 rounded-xl  cursor-pointer font-[600] text-xl hover:underline transition-all hover:transition-all ease-in-out hover:scale-110 shadow-lg'>Ver más</div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard