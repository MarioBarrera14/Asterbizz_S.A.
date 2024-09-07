import React, { ReactNode } from 'react'
import ServiceCard from '../ServiceCard'
import {IconBrush, IconCash, IconEnterprise,IconEnterprise2,IconEnterprise3,IconHouse,IconSettings,IconSettings2,IconWeb} from '../icons/ServicesIcons'




const services=[
  {
    
    icon:"IconWeb",
    title:"Desarrollo Web",
    d1:"Creamos páginas web modernas y adaptadas a cualquier dispositivo, desde sitios corporativos hasta tiendas en línea.",
    d2:"Entregamos diseños únicos que representan tu marca y capturan la atención de tus clientes, optimizando la experiencia del usuario y el rendimiento del sitio.",
    d3:"",
  },
  {
    icon:"IconEnterprise",
    title:"Software Empresarial",
    d1:"Desarrollamos soluciones a medida para tu negocio.",
    d2:"Optimizamos tus operaciones y mejoramos la eficiencia de los procesos de tu negocio para llevarlo directo al futuro.",
    d3:"",
  },
  {
    
    icon:"IconBrush",
    title:"Diseño UI/UX",
    d1:"¿Ya tenés una web?",
    d2:"Aumentá el engagement de tu página y elevá tus ventas adecuando el flujo de información a las necesidades de tu negocio. ",
    d3:"Nuestro servicio de diseño promete mejorar la experiencia de tus clientes y ayudarlos a concretar una compra con más eficacia.",
  },
  {
    
    icon:"IconSettings",
    title:"Automatizaciones",
    d1:"¿Te imaginás ahorrar dinero y tiempo a la vez?",
    d2:"En AsterBizz nos encargamos de convertir las tareas rutinarias y tediosas en un proceso sensillo para optimizar tu tiempo y el de tus colaboradores.",
    d3:"",
  },
  {
    
    icon:"IconCash",
    title:"Desarrollo de E-commerce",
    d1:"Fidelizá a tus clientes brindandoles un espacio de compra confiable.",
    d2:"Integramos pasarelas de pago seguras que tus clientes ya conocen como Mercado Pago o Pay-Pal.",
    d3:"Desde pequeñas tiendas hasta grandes marketplaces, adaptamos la plataforma a tus necesidades específicas para que tu negocio crezca en el mundo digital.",
  },
  {
    
    icon:"IconHouse",
    title:"Domótica",
    d1:"Implementamos soluciones de domótica, automatizando y controlando dispositivos inteligentes desde una plataforma centralizada y personalizada para tu empresa u hogar.",
    d2:"",
    d3:"",
  },
  
]



function ServicesSection() {
  return (
    <section className="flex-1 bg-primario-light/75 z-10 backdrop-blur-[3px] rounded-xl py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8 sm:text-4xl md:text-5xl">
          Nuestros Servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
            icon={<IconWeb className='mr-2'/>} 
            title={services[0].title}>
                <P>{services[0].d1}</P>
                <P className='mt-[.5rem]'>{services[0].d2}</P>
            </ServiceCard>

            <ServiceCard
            icon={<IconEnterprise3 className='mr-2'/>}
            title={services[1].title}>
                <P>{services[1].d1}</P>
                <P className='mt-[.5rem]'>{services[1].d2}</P>
            </ServiceCard>

            <ServiceCard 
            icon={<IconBrush className='mr-2'/>}
            title={services[2].title}>
                <P>{services[2].d1}</P>
                <P className='mt-[.5rem]'>{services[2].d2}</P>
                <P className='mt-[.5rem]'>{services[2].d3}</P>
            </ServiceCard>

            <ServiceCard
            icon={<IconSettings className='mr-2'/>}
            title={services[3].title}>
                <P>{services[3].d1}</P>
                <P className='mt-[.5rem]'>{services[3].d2}</P>
            </ServiceCard>

            <ServiceCard
            icon={<IconCash className='mr-2'/>}
            title={services[4].title}>
                <P>{services[4].d1}</P>
                <P className='mt-[.5rem]'>{services[4].d2}</P>
                <P className='mt-[.5rem]'>{services[4].d3}</P>
            </ServiceCard>

            <ServiceCard
            icon={<IconHouse className='mr-2'/>}
            title={services[5].title}>
                <P>{services[5].d1}</P>
                <P className='mt-[.5rem]'>{services[5].d2}</P>
                <P className='mt-[.5rem]'>{services[5].d3}</P>
            </ServiceCard>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection


export const P=({children,className}:{children:ReactNode,className?:string})=>{

  return <p className={'text-pretty leading-[1.8rem]'+" "+className}>{children}</p>

}